/* eslint-disable react/prop-types */
import { traerCookie } from "../services/cookies";
import RutaPrivada from "../components/RutaPrivada";

const usuarioRegistrado = () => {
    const token = traerCookie('token_inicio')
    if (token) {
        return true
    }
}

const RutasPrivadas = ({children}) => {
    return usuarioRegistrado() ? children : <RutaPrivada/>
}
export default RutasPrivadas