import { useRef, useState } from "react"
import Input from "../components/Input"
import Botton from "../components/Botton"
import { postDataForUser } from "../services/fetch"
import { useNavigate } from "react-router-dom"
import { muestraAlerta } from "../services/alertas"
import "../styles/Registro.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HamburgerMenu from "../components/HamburgerMenu"

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
    const postUsuario = async(obj, endpoint)=>{
        await postDataForUser(obj, endpoint)
    }
   
    return (
        <>
        <Navbar/>
        <div style={{marginTop: 1}}>
            <HamburgerMenu/>
        </div>

        <h1 className="tituloRegistro">Crear una cuenta</h1> 
        
        <div style={{display:"flex",flexDirection:"column",gap:"10vh"}}>

        <div style={{display:'flex',marginTop:"10vh"}}>

        <div className="cont-input-registro">
            <i className="fa-solid fa-user estilos-iconos-registro"></i>
            <span className="text-center mt-2">Crea un nombre de usuario</span>
            <Input tipo={"text"} nombre={"Usuario"} refvali={nombreReg} valor={nombre} cambio={(e)=>setNombre(e.target.value)} clase={"inputFormRegistro"}/>
            <div>
                <ul>
                    <li>Al menos una letra mayúscula</li>
                    <li>Al menos una letra minúscula</li>
                    <li>Al menos un número</li>
                    <li>Al menos un caracter especial</li>
                </ul>
            </div>
        </div>

        <div className="cont-input-registro">
            <i className="fa-solid fa-envelope estilos-iconos-registro"></i>
            <span className="text-center mt-2">Ingresa un correo</span>
            <Input tipo={'email'} nombre={'Correo electrónico'} refvali={correoReg} valor={correo} cambio={(e)=>setCorreo(e.target.value)} clase={"inputFormRegistro"}/>
            <div>
                <ul>
                    <li>usuario@gmail.com</li>
                </ul>
            </div>
        </div>
        </div>
 
        <div style={{display:'flex'}}>
        <div className="cont-input-registro">
            <i className="fa-solid fa-lock estilos-iconos-registro"></i>
            <span className="text-center mt-2">Crea una constraseña</span>
            <Input longitud={'8'} tipo={'password'} nombre={'Contraseña'} refvali={contraReg} valor={contra} cambio={(e)=>setContra(e.target.value)} clase={"inputFormRegistro"}/>
            <div>
                <ul>
                    <li>Al menos una letra mayúscula</li>
                    <li>Al menos una letra minúscula</li>
                    <li>Al menos un dígito</li>
                    <li>Al menos un caracter especial</li>
                    <li>Mínimo 8 caracteres sin espacios</li>
                </ul>
            </div>
        </div>

        <div className="cont-input-registro" style={{marginTop:"-15px"}}>
            <i className="fa-solid fa-phone estilos-iconos-registro"></i>
            <span className="text-center mt-2">Ingresa un teléfono</span>
            <Input longitud={"8"} tipo={'number'} nombre={'Número telefónico'} refvali={numeroReg} valor={numero} cambio={(e)=>setNumero(e.target.value)} clase={"inputFormRegistro"}/>
            <div>
                <ul>
                    <li>Comenzar con un número entre 6 y 9</li>
                    <li>No tener espacios ni otros espacios adicionales</li>
                    <li>Tener 8 dígitos en total</li>
                </ul>
            </div>
        </div>
        </div>

        <div className="cont-input-registro d-flex mx-auto" style={{marginTop:"-65px"}}>
            <i className="fa-solid fa-location-dot estilos-iconos-registro"></i>
            <span className="text-center mt-2">Ingresa tu ubicacion</span>
            <Input tipo={'text'} nombre={'Ubicacion'} refvali={ubicacionReg} valor={ubicacion} cambio={(e)=>setUbicacion(e.target.value)} clase={"inputFormRegistro"}/>
            <div>
                <ul>
                    <li>Comenzar con una letra mayúscula</li>
                </ul>
            </div>
        </div>
        </div>
        <div className="d-flex flex-column">
            <Botton clase={"botonRegistro"} nombre={'Registrar'} tipo={'Button'} evento={ValidarInputs}/>
            </div>
        <div className="text-center" style={{marginBottom: 200}}>
            <a onClick={()=>navigate("/iniciosesion")} className="enlaceInicio">Ir a inicio de sesión</a>
        </div>
        <Footer/>
        </>
    )
}
export default Registro