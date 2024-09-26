import { useRef, useState } from "react"
import Input from "../components/Input"
import Botton from "../components/Botton"
import { postData } from "../services/fetch"

const Registro = () => {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [contra, setContra] = useState('')
    const [numero, setNumero] = useState('')
    const [ubicacion, setUbicacion] = useState('')

    const nombreReg = useRef('')
    const correoReg = useRef('')
    const contraReg = useRef('')
    const numeroReg = useRef('')
    const ubicacionReg = useRef('')

    const ValidarInputs= async()=>{
        const nombreVal=nombreReg.current.value.trim()
        const correVal = correoReg.current.value.trim()
        const contraVal = contraReg.current.value.trim()
        const numeroVal = numeroReg.current.value.trim()
        const ubicacionVal = ubicacionReg.current.value.trim()

        if (!nombreVal || !correVal || !contraVal || !numeroVal || !ubicacionVal){
            alert('Por favor llene los campos vacíos', 'error')
            return 
        }
       await agregarUsuario()
    }

    const agregarUsuario=async()=>{
        const infoUsuario = {
            username:nombre,
            password:contra,
            email:correo,
            telefono:numero,
            ubicacion: ubicacion
        }


        await postData(infoUsuario,'registro/')
    }

    return (
        <>
        <h1>Crear una cuenta</h1>
        <div>
            <span>Crea un nombre de usuario</span>
            <Input tipo={'text'} nombre={'usuario'} refvali={nombreReg} valor={nombre} cambio={(e)=> setNombre(e.target.value)}/>
            <span>Crea una constraseña</span>
            <Input tipo={'password'} nombre={'contraseña'} refvali={contraReg} valor={contra} cambio={(e)=>setContra(e.target.value)}/>
            <span>Ingresa un correo</span>
            <Input tipo={'email'} nombre={'correo electrónico'} refvali={correoReg} valor={correo} cambio={(e)=>setCorreo(e.target.value)}/>
            <span>ingresa un teléfono</span>
            <i className="fa-solid fa-phone"></i>
            <Input tipo={'number'} nombre={'número telefónico'} refvali={numeroReg} valor={numero} cambio={(e)=>setNumero(e.target.value)}/>
            <span>ingresa tu ubicacion</span>
            <Input tipo={'text'} nombre={'ubicacion'} refvali={ubicacionReg} valor={ubicacion} cambio={(e)=>setUbicacion(e.target.value)}/>
            <Botton nombre={'Registrar'} tipo={'Button'} evento={ValidarInputs}/>
        </div>
        </>
    )
}
export default Registro