import { Route,Routes } from "react-router-dom"
import Registro from "../pages/Registro"
import InicioSesion from "../pages/InicioSesion"
import PagPrincipal from "../pages/PagPrincipal"

const PageRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Registro/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/iniciosesion" element={<InicioSesion/>}/>
            <Route path="/paginaprincipal" element={<PagPrincipal/>}/>
        </Routes>
    )    
}
export default PageRoutes