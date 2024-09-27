import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
const PagPrincipal =()=>{
    const navigate = useNavigate()
    return(
        <>
        <Navbar/>
        <h1>Librería virtual</h1>
        <a onClick={()=>navigate('/iniciosesion')}>Iniciar sesión</a>
        </>
    )
}
export default PagPrincipal