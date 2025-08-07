import { useState } from "react"
import CampoDigitacao from "../../components/CampoDigitacao"
import FormularioLogin from "../../components/FormularioLogin"

function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <>
        <FormularioLogin>

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
                onChange={setEmail}
            />
            
        </FormularioLogin>
        </>
    )
}

export default Login
