import React, { useState } from "react"
import CampoDigitacao from "../../components/CampoDigitacao"
import FormularioLogin from "../../components/FormularioLogin"
import TituloLogin from "./Titulo"
import styled from "styled-components"
import imagem from "./Logo.png"
import BotaoLogin from "./Button"
import usePost from "../../usePost"

interface ILogin {
    email: string,
    senha: string
}

const LinkA = styled.a`
    underline: none;
    cursor: pointer;
    color: #0B3B60;
`

export const ImagemContainer = styled.div`
    margin: 3em 0;
`

function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { cadastrarDados, erro, sucesso } = usePost()

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const usuario: ILogin = {
            email: email,
            senha: senha
        }

        try {
            cadastrarDados({ url: "auth/login", dados: usuario })
        } catch (erro) {
            erro && alert("Não foi possivel fazer o login")
        }   


    }

    return (
        <>
            <ImagemContainer>
                <img src={imagem} alt="Imagem de logo   " />
            </ImagemContainer>
            <FormularioLogin onSubmit={handleLogin}>
                <TituloLogin conteudo="Faça login em sua conta" />
                <CampoDigitacao
                    label="Email"
                    valor={email}
                    tipo="text"
                    placeholder="Insira seu endereço de e-mail"
                    onChange={setEmail}
                />
                <CampoDigitacao
                    label="Senha"
                    valor={senha}
                    tipo="text"
                    placeholder="Insira sua senha"
                    onChange={setSenha}
                />
                <BotaoLogin conteudo="Entrar" />
                <LinkA>
                    Esqueceu a senha?
                </LinkA>
            </FormularioLogin>
            <p>Ainda não tem conta?{<LinkA style={{ color: '#339CFF', fontWeight: 'bold' }}>Faça seu cadastro</LinkA>}</p>

        </>
    )
}

export default Login
