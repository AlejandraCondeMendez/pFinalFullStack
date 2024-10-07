import { Route,Routes } from "react-router-dom"
import Registro from "../pages/Registro"
import InicioSesion from "../pages/InicioSesion"
import PagPrincipal from "../pages/PagPrincipal"
import PagAdmin from "../pages/PagAdmin"
import AcercaDnosotros from "../pages/AcercaDnosotros"

const PageRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Registro/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/iniciosesion" element={<InicioSesion/>}/>
            <Route path="/paginaprincipal" element={<PagPrincipal/>}/>
            <Route path="/micuenta" element={<PagAdmin/>}/>
            <Route path="/nosotros" element={<AcercaDnosotros/>}/>
        </Routes>
    )    
}
export default PageRoutes