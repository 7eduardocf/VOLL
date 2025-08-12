import React from "react"
import styled from "styled-components"

export interface IForm{
    children: React.ReactNode
     onSubmit?: React.FormEventHandler<HTMLFormElement>
}

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 36.75em;
    heigth: auto;
`

function FormularioLogin({ children, onSubmit }: IForm) {
    return (
        <Form>
            {children}
        </Form>
    )
}

export default FormularioLogin
