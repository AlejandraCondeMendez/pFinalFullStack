import { Route,Routes } from "react-router-dom"
import Registro from "../pages/Registro"
import InicioSesion from "../pages/InicioSesion"
import PagPrincipal from "../pages/PagPrincipal"
import PagAdmin from "../pages/LibrosAgregados"
import AcercaDnosotros from "../pages/AcercaDnosotros"
import LibrosDeseados from "../pages/LibrosDeseados"
import LibrosAgregados from "../pages/LibrosAgregados"
import LibrosPrestados from "../pages/LibrosPrestados"

const PageRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Registro/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/iniciosesion" element={<InicioSesion/>}/>
            <Route path="/paginaprincipal" element={<PagPrincipal/>}/>
            <Route path="/librosagregados" element={<PagAdmin/>}/>
            <Route path="librosdeseados" element={<LibrosDeseados/>}/>
            <Route path="librosprestados" element={<LibrosPrestados/>}/>
            <Route path="/nosotros" element={<AcercaDnosotros/>}/>

        </Routes>
    )    
}
export default PageRoutes