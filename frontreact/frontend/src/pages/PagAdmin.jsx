import Navbar from "../components/Navbar"
import Botton from "../components/Botton"
import '../styles/PagAdmin.css'

const PagAdmin=()=>{
    
    return(
        <>
        <Navbar/>
        <h1>Mis libros</h1>
        <hr/>
        <Botton nombre={'Agregar libro'} clase={'botonMicuenta'}/>
        <p>Mis libros: </p>
        </>
    )
}
export default PagAdmin