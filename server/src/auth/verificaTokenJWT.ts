import { Request, Response, NextFunction, RequestHandler } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { type Role } from './roles'
import { AppError, Status } from '../error/ErrorHandler.js'

declare module 'express' {
  interface Request {
    userId?: string
  }
}

function isJwtPayload(decoded: string | JwtPayload | undefined): decoded is JwtPayload {
  return typeof decoded !== 'string' && decoded !== undefined
}

export function verificaTokenJWT(...roles: Role[]): RequestHandler {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.headers.authorization) {
      throw new AppError('Nenhum token informado.', Status.BAD_REQUEST)
    }

    const tokenString: string[] = req.headers.authorization.split(' ')
    const token = tokenString[1]

    if (!token) {
      res.status(403).json({ auth: false, message: 'Nenhum token informado.' })
      return
    }

    const secret = process.env.SECRET
    if (!secret) {
      throw new AppError('Variável de ambiente SECRET não definida.', Status.INTERNAL_SERVER_ERROR)
    }

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(403).json({ auth: false, message: 'Falha ao autenticar o token.' })
        return
      }

      if (!isJwtPayload(decoded)) {
        res.status(403).json({ auth: false, message: 'Token inválido.' })
        return
      }

      if (roles.length > 0 && !roles.includes(decoded.role as Role)) {
        res.status(403).json({ auth: false, message: 'Não autorizado' })
        return
      }

      req.userId = decoded.id
      next()
    })
  }
}