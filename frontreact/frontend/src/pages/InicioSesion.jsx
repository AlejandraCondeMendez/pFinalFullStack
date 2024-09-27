import Input from "../components/Input"
import Botton from "../components/Botton"
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import { muestraAlerta } from "../services/alertas"
import { postData } from "../services/fetch"


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
        <h1>Inicio de sesión</h1>
        <Input tipo={'text'} nombre={'Usuario'} refvali={usuarioRef} valor={usuario} cambio={(e)=>setUsuario(e.target.value)} />
        <Input tipo={'password'} nombre={'Contraseña'} refvali={contraRef} valor={contra} cambio={(e)=>setContra(e.target.value)}/>
        <Botton nombre={'Iniciar sesión'} tipo={'button'} evento={validarInicio}/>
        <a onClick={()=>navigate('/')}>Crear una cuenta</a>
        </>
    )
}

export default InicioSesion