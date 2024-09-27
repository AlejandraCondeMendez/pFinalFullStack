import Input from "../components/Input"
import Botton from "../components/Botton"
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import { muestraAlerta } from "../services/alertas"
import { postData } from "../services/fetch"
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
            username: usuario,
            password: contra
        }
         postInicio(infoInicio, 'iniciosesion/')
         navigate("/paginaprincipal")

    }
    const postInicio=async(obj, endpoint)=>{
        await postData(obj, endpoint)
    }
    
    return(
        <>
        <Navbar/>
        <div className="titulo">
            <h1>Inicio de sesión</h1>
            <p>Ingresa tus credenciales</p>
        </div> 
        
        <div className="d-flex flex-column mx-auto InputInicioS">
            <Input tipo={'text'} nombre={'Usuario'} refvali={usuarioRef} valor={usuario} cambio={(e)=>setUsuario(e.target.value)}  clase={"inputForm"} />
            <Input tipo={'password'} nombre={'Contraseña'} refvali={contraRef} valor={contra} cambio={(e)=>setContra(e.target.value)}  clase={"inputForm"}/>
            <Botton nombre={'Iniciar sesión'} tipo={'button'} evento={validarInicio}/>
        </div>
        
        <a onClick={()=>navigate('/')} className="enlaceCrear">Crear una cuenta</a>
        </>
    )
}

export default InicioSesion