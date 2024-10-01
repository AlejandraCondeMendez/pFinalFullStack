import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Search from "../components/Search"
import "../styles/PagPrincipal.css"
import CardBook from "../components/CardBook"

const PagPrincipal =()=>{
    const navigate = useNavigate()



    return(
        <>
        <Navbar/>
        <Search/>
        <h1>Libreria virtual</h1>
        <CardBook/>
        <a onClick={()=>navigate('/iniciosesion')}>Iniciar sesión</a>
        </>
    )
}
export default PagPrincipal