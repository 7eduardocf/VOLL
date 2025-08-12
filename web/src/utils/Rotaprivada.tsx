import { Navigate, Outlet } from "react-router-dom"
import autenticaStore from "../stores/autentica.store"

const Rotaprivada = () => {

    const {estaAutenticado} = autenticaStore

    return(
        estaAutenticado ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default Rotaprivada