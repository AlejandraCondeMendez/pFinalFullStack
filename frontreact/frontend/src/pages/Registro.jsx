import { useRef, useState } from "react"
import Input from "../components/Input"
import Botton from "../components/Botton"

const Registro = () => {
    const [nombre, setNombre] = useState()
    const [correo, setCorreo] = useState()
    const [contra, setContra] = useState()
    const [numero, setNumero] = useState()

    const nombreReg = useRef('')
    const correoReg = useRef('')
    const contraReg = useRef('')
    const numeroReg = useRef('')

    const ValidarInputs= async()=>{
        const nombreVal=nombreReg.current.value.trim()
        const correVal = correoReg.current.value.trim()
        const contraVal = contraReg.current.value.trim()
        const numeroVal = numeroReg.current.value.trim()

        if (!nombreVal || !correVal || !contraVal || !numeroVal){
            alert('Por favor llene los campos vacíos', 'error')
            return 
        }
    }

    return (
        <>
        <h1>Crear una cuenta</h1>
        <div>
            <span>Crea un nombre de usuario</span>
            <Input/>
            <Botton/>
        </div>
        </>
    )
}
export default Registro