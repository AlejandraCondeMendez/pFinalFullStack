import Input from "../components/Input"
import Botton from "../components/Botton"
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import { muestraAlerta } from "../services/alertas"
import { postDataForUser } from "../services/fetch"
import '../styles/InicioSesion.css'
import Navbar from "../components/Navbar"


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
            username: usuarioVal,
            password: contraVal
        }
        const inicioSesion = await postDataForUser(infoInicio, 'iniciosesion/')
        if (inicioSesion.success){
            navigate("/paginaprincipal")
        }
    }

    return(
        <>
        <Navbar/>
        <div>
            <h1 className="tituloInicio">Inicio de sesión</h1>
            <p className="subtituloInicio">Ingresa tus credenciales</p>
        </div> 
        
        <div className="d-flex flex-column mx-auto InputInicioS">
            <Input tipo={'text'} nombre={'Usuario'} refvali={usuarioRef} valor={usuario} cambio={(e)=>setUsuario(e.target.value)}  clase={"inputForm"} />
            <Input tipo={'password'} nombre={'Contraseña'} refvali={contraRef} valor={contra} cambio={(e)=>setContra(e.target.value)}  clase={"inputForm"}/>
            <Botton clase={"botonInicio"} nombre={'Iniciar sesión'} tipo={'button'} evento={validarInicio}/>
        </div>
        <div className="text-center">
        <a onClick={()=>navigate('/')} className="enlaceCrear">Crear una cuenta</a>
        </div>
        </>
    )
    
}
export default InicioSesion