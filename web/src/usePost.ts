import axios from "axios";
import { useState } from "react";

export default function usePost(){
    const [erro, setErro] = useState("")
    const [sucesso, setSucesso] = useState(false)
    
    async function cadastrarDados<T> ({url, dados}: {url: string, dados: T}) {
        // await fetch(`http://localhost:8080/${url}`, {
        //     method: "POST",
        //     body: JSON.stringify(dados)
        // })
        try {
            await axios.post(`http://localhost:8080/${url}`, dados)
            setSucesso(true)
        } catch (erro) {
            setErro("Não foi possivel enviar os dados")
        }

    }
    return{cadastrarDados, sucesso, erro}
}