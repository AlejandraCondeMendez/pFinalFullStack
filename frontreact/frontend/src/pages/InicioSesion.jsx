import Input from "../components/Input"
import Botton from "../components/Botton"
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import { muestraAlerta } from "../services/alertas"
import { postDataForUser } from "../services/fetch"
import '../styles/InicioSesion.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HamburgerMenu from "../components/HamburgerMenu"
import { crearCookie } from "../services/cookies"


const InicioSesion=()=>{
    
    const navigate = useNavigate()
    const usuarioRef = useRef('')
    const contraRef = useRef('')
    const [usuario, setUsuario] = useState('')
    const [contra, setContra] = useState('')

    const validarInicio = async()=>{
        const usuarioVal = usuarioRef.current.value.trim()
        const contraVal = contraRef.current.value.trim()
        if (!usuarioVal || !contraVal){
            muestraAlerta('Porfavor llene los campos vacíos', 'error')  
            return
        }
        const infoInicio ={
            usernameFront: usuarioVal,
            passwordFront: contraVal
        }
        const inicioSesion = await postDataForUser(infoInicio, 'iniciosesion/')
        if (inicioSesion.success){
            localStorage.setItem('localUsuarioID', inicioSesion.id)
            crearCookie('token_inicio', inicioSesion.token_acceso, 1) // nombre de la cookie - valor - expiración 
            
            crearCookie("telefonoUsuario", inicioSesion.telefono,1)
            crearCookie("correoUsuario", inicioSesion.correo,1)
            crearCookie("nombreUsuario", inicioSesion.nombre,1)
            crearCookie("ubicacionUsuario", inicioSesion.ubicacion,1)

            crearCookie("localUsuarioID", inicioSesion.id,1)
            navigate("/paginaprincipal")
        }
    }

    return(
        <>
        <Navbar/>

        <div style={{marginTop: -40}}>
            <HamburgerMenu/>
        </div>

        <div>
            <h1 className="tituloInicio">Inicio de sesión</h1>
            <p className="subtituloInicio">Ingresa tus credenciales</p>
        </div> 
        
        <div className="d-flex flex-column mx-auto InputInicioS">
            <Input tipo={'text'} nombre={'Usuario'} refvali={usuarioRef} valor={usuario} cambio={(e)=>setUsuario(e.target.value)}  clase={"inputForm"} />
            <Input tipo={'password'} nombre={'Contraseña'} refvali={contraRef} valor={contra} cambio={(e)=>setContra(e.target.value)}  clase={"inputForm"}/>
            <Botton clase={"botonInicio"} nombre={'Iniciar sesión'} tipo={'button'} evento={validarInicio}/>
        </div>
        <div className="text-center" style={{marginBottom: 200}}>
        <a onClick={()=>navigate('/')} className="enlaceCrear">Crear una cuenta</a>
        </div>
        <Footer/>
        </>
    )
    
}
export default InicioSesion