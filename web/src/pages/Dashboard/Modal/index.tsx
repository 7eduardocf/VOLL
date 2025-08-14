import { Box, Modal } from "@mui/material"
import Titulo from "../../../components/Titulo"
import styled from "styled-components"
import Botao from "../../../components/Botao";

const BoxCustomizado = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  max-height: 90vh;
  overflow-y: auto;
  background-color: var(--branco);
  border: none;
  border-radius: 16px;
  padding: 1em 5em;
`;

const Container = styled.div`
text-align: left;
`

const ContainerSwitch = styled.div`
text-align: center;
`

const TextoSwitch = styled.p`
color: var(--cinza);
`

const BotaoCustomizado = styled(Botao)`
    width: 50%;
    display: block;
    margin: 0 auto;
`

const ContainerEndereco = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
grid-gap: 0 1em;
`

function ModalCadastro({ open, handleClose }: { open: boolean, handleClose: () => void }) {
    return (
        <Modal  
            open={open}
            onClose={handleClose}
            aria-labelledby = "Modal de cadastro do especialista"
            aria-describedby = "Nesse modal terá os dados de cadastro do especialista"
        >
            <Box>
                <Titulo>Cadastre o especialista inserindo os dados abaixo</Titulo>
            </Box>
        </Modal>
    )
}

export default ModalCadastro
