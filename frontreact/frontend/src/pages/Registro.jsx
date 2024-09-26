import { useRef, useState } from "react"
import Input from "../components/Input"
import Botton from "../components/Botton"
import { postData } from "../services/fetch"
import { useNavigate } from "react-router-dom"
import { muestraAlerta } from "../services/alertas"

const Registro = () => {
    //Rutas
    const navigate = useNavigate()

    //Estados
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [contra, setContra] = useState('')
    const [numero, setNumero] = useState('')
    const [ubicacion, setUbicacion] = useState('')

    // Ref-Validaciones
    const nombreReg = useRef('')
    const correoReg = useRef('')
    const contraReg = useRef('')
    const numeroReg = useRef('')
    const ubicacionReg = useRef('')

    // Funciones
    const ValidarInputs= async()=>{
        const nombreVal=nombreReg.current.value.trim()
        const correVal = correoReg.current.value.trim()
        const contraVal = contraReg.current.value.trim()
        const numeroVal = numeroReg.current.value.trim()
        const ubicacionVal = ubicacionReg.current.value.trim()

        if (!nombreVal || !correVal || !contraVal || !numeroVal || !ubicacionVal){
            muestraAlerta('Por favor llene los campos vacíos', 'error')
            return 
        }
        const infoUsuario = {
            username:nombre,
            password:contra,
            email:correo,
            telefono:numero,
            ubicacion: ubicacion
        }
       await postUsuario(infoUsuario, 'registro/')
       setNombre('')
       setContra('')
       setCorreo('')
       setNumero('')
       setUbicacion('')
    }

{/*Se crea la función postUsuario para agregar los datos a la BD. Recibe el objeto infoUsuario
    y el endpoint registro (BD), el objeto tiene los datos que se van agregar a la BD.*/}
    const postUsuario =async(obj, endpoint)=>{
        await postData(obj, endpoint)
    }
   
    return (
        <>
        <h1>Crear una cuenta</h1>
        <div>
            <span>Crea un nombre de usuario</span>
            <Input tipo={'text'} nombre={'Usuario'} refvali={nombreReg} valor={nombre} cambio={(e)=> setNombre(e.target.value)}/>
            <span>Crea una constraseña</span>
            <Input tipo={'password'} nombre={'Contraseña'} refvali={contraReg} valor={contra} cambio={(e)=>setContra(e.target.value)}/>
            <span>Ingresa un correo</span>
            <Input tipo={'email'} nombre={'Correo electrónico'} refvali={correoReg} valor={correo} cambio={(e)=>setCorreo(e.target.value)}/>
            <span>ingresa un teléfono</span>
            <i className="fa-solid fa-phone"></i>
            <Input tipo={'number'} nombre={'Número telefónico'} refvali={numeroReg} valor={numero} cambio={(e)=>setNumero(e.target.value)}/>
            <span>ingresa tu ubicacion</span>
            <Input tipo={'text'} nombre={'Ubicacion'} refvali={ubicacionReg} valor={ubicacion} cambio={(e)=>setUbicacion(e.target.value)}/>
            <Botton nombre={'Registrar'} tipo={'Button'} evento={ValidarInputs}/>
            <a onClick={()=>navigate("/iniciosesion")}>Ir a inicio de sesión</a>

        </div>
        </>
    )
}
export default Registro