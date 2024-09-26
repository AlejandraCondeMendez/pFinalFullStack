import Input from "../components/Input"
import Botton from "../components/Botton"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { muestraAlerta } from "../services/alertas"


const InicioSesion=()=>{
    
    const navigate = useNavigate()
    const usuarioRef = useRef('')
    const contraRef = useRef('')

    const validarInputI = async()=>{
        const usuarioVal = usuarioRef.current.value.trim()
        const contraVal = contraRef.current.value.trim()
        if (!usuarioVal || !contraVal){
            muestraAlerta('Porfavor llene los campos vacíos', 'error')
            return
        }
    }

    return(
        <>
        <h1>Inicio de sesión</h1>
        <Input tipo={'text'} nombre={'Usuario'} refvali={usuarioRef}/>
        <Input tipo={'text'} nombre={'Contraseña'}/>
        <Botton nombre={'Iniciar sesión'} tipo={'button'} evento={validarInputI}/>
        <a onClick={()=>navigate('/')}>Crear una cuenta</a>
        </>
    )
}

export default InicioSesion