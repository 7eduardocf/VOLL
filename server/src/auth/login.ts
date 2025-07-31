import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import { Autenticaveis } from './authEntity.js'

import { AppDataSource } from '../data-source.js'
import { decryptPassword } from '../utils/senhaUtils.js'
import { AppError } from '../error/ErrorHandler.js'

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, senha } = req.body

  const autenticavel = await AppDataSource.manager.findOne(Autenticaveis, {
    select: ['id', 'rota', 'role', 'senha'],
    where: { email }
  })

  if (autenticavel == null) {
    throw new AppError('Não encontrado!', 404)
  }

  const { id, rota, role, senha: senhaAuth } = autenticavel
  const senhaCorrespondente = decryptPassword(senhaAuth)

  if (senha !== senhaCorrespondente) {
    throw new AppError('Senha incorreta!', 401)
  }

  const secret = process.env.SECRET
  if (!secret) {
    throw new AppError('Variável de ambiente SECRET não definida.', 500)
  }

  const token = jwt.sign({ id, role }, secret, {
    expiresIn: 86400 // 24h
  })

  res.status(200).json({
    auth: true,
    token,
    rota
  })
}

export const logout = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({ auth: false, token: null })
}
