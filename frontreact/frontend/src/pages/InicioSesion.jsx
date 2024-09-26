import Input from "../components/Input"
import Botton from "../components/Botton"

const InicioSesion=()=>{

    return(
        <>
        <h1>Inicio de sesión</h1>
        <Input tipo={'text'} nombre={'nombre de usuario'}/>
        <Botton nombre={'Iniciar sesión'} tipo={'button'}/>
        </>
    )
}

export default InicioSesion