import styled from "styled-components"

const Botao = styled.button`
    background-color: #0B3B60;
    width: 17.5em;
    height: 3em;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    color: white;
    font-family: Public Sans;
`
interface IBotao {
    conteudo: string
}

function BotaoLogin({ conteudo }: IBotao): JSX.Element {
    return (

        <Botao type="submit">
            {conteudo}
        </Botao>
    )
}

export default BotaoLogin
