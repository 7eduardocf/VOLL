import React from "react"
import styled from "styled-components"

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50%;
    width: 36.75em;
    heigth: auto;
    background-color: red;
`

function FormularioLogin({ children }: { children: React.ReactNode }) {
    return (
        <Form>
            {children}
        </Form>
    )
}

export default FormularioLogin
