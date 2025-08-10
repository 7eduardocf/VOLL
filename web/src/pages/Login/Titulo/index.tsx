import styled from "styled-components"

const TituloH2 = styled.h2`
    font-weight: bold;
    font-size: 24px;
    color: #6B6E71;
`
interface ITituloLogin{
    conteudo: string
}
function TituloLogin({conteudo}: ITituloLogin): JSX.Element {
    return (
        <TituloH2>
            {conteudo}
        </TituloH2>
    )
}

export default TituloLogin
