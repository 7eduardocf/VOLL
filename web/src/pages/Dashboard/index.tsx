import { Container } from "@mui/material"
import Avaliacao from "../../components/Avaliacao"
import Botao from "../../components/Botao"
import Cabecalho from "../../components/Cabecalho"
import Grafico from "../../components/Grafico"
import Rodape from "../../components/Rodape"
import Subtitulo from "../../components/Subtitulo"
import Tabela from "../../components/Tabela"
import Titulo from "../../components/Titulo"
import useDadosConsulta from "../../useDadosConsulta"
import useDadosProfissional from "../../useDadosProfissional"

const Dashboard = () => {

    const { dados: consultas, erro: consultasErro } = useDadosConsulta();
    const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

    if (consultasErro || profissionaisErro) {
        console.log("Ocorreu um erro na requisição")
    }

    return (
        <Container>
            <Titulo>Área Administrativa</Titulo>
            <Botao>Cadastrar especialista</Botao>
            <Titulo imagem="consulta">Consultas do Dia</Titulo>
            <Tabela consultas={consultas} />
            <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
            <Subtitulo>Dezembro/22</Subtitulo>
            <Grafico consultas={consultas} profissionais={profissionais} />
            <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
            <Avaliacao profissionais={profissionais} />
        </Container>
    )
}

export default Dashboard
