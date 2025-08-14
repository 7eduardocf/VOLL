import IEndereco from "./IEndereco"

export default interface IProfissional {
    nome: string
    crm: string
    imagem: string
    especialidade: string
    possuiPlanoDeSaude: boolean
    senha: string
    planoSaude: string[]
    estaAtivo: boolean
    email: string
    telefone: string
    endereco: IEndereco
}