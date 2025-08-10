import React from "react"
import styled from "styled-components"

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 36.75em;
    heigth: auto;

`

function FormularioLogin({ children }: { children: React.ReactNode }) {
    return (
        <Form>
            {children}
        </Form>
    )
}

export default FormularioLogin
