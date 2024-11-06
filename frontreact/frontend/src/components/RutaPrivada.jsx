import Navbar from "./Navbar"
import HamburgerMenu from "./HamburgerMenu"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"

const RutaPrivada = () =>{
    const navigate = useNavigate()
    return(
        <>
        <Navbar/>
        <div style={{marginTop: 1}}>
            <HamburgerMenu/>
        </div>
        <div style={{textAlign:'center', marginTop:'5%'}}>
            <h3>Inicia sesión para ver esta página</h3>
            <div className="text-center" style={{marginTop:'5%'}}>
                <p>Inicia sesión con tus credenciales</p>
                <a onClick={()=>navigate("/iniciosesion")} className="enlaceInicio">Ir a inicio de sesión</a>
            </div>
            <div style={{marginTop:'4%'}}>
                <p>Sino tienes una cuenta, ¡registrate!</p>
                <a onClick={()=>navigate('/')} className="enlaceCrear">Crear una cuenta</a>
            </div>
        </div>
        <div style={{marginTop: 200}}>
            <Footer/>
        </div>
        </>
    )
}
export default RutaPrivada