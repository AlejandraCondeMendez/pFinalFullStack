import { useRef, useState } from "react"
import Inputs from "../components/Inputs"

const Registro = () => {
    const [nombre, setNombre] = useState()
    const [correo, setCorreo] = useState()
    const [contra, setContra] = useState()
    const [numero, setNumero] = useState()

    const nombreReg = useRef('')
    const correoReg = useRef('')
    const contraReg = useRef('')
    const numeroReg = useRef('')

    const ValidarInputs=()=>{
        
    }

    return (
        <>
        <h1>Crear una cuenta</h1>
        <div>
            <span>Crea un nombre de usuario</span>
            <Inputs/>
        </div>

        </>
    )
}
export default Registro