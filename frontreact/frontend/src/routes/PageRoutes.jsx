import { Route,Routes } from "react-router-dom"
import Registro from "../pages/Registro"
import InicioSesion from "../pages/InicioSesion"
import PagPrincipal from "../pages/PagPrincipal"
import AcercaDnosotros from "../pages/AcercaDnosotros"
import LibrosPrestados from "../pages/LibrosPrestados"
import MiLibreria from "../pages/MiLibreria"
import LibrosAgregados from "../pages/LibrosAgregados"
import InfoLibro from "../pages/InfoLibro"
import PagCompra from "../pages/PagCompra"
import PagCuenta from "../pages/PagCuenta"

const PageRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Registro/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/iniciosesion" element={<InicioSesion/>}/>
            <Route path="/paginaprincipal" element={<PagPrincipal/>}/>
            <Route path="/librosagregados" element={<LibrosAgregados/>}/>
            <Route path="/librosprestados" element={<LibrosPrestados/>}/>
            <Route path="/nosotros" element={<AcercaDnosotros/>}/>
            <Route path="/milibreria" element={<MiLibreria/>}/>
            <Route path="/informacionlibro" element={<InfoLibro/>}/>
            <Route path="/paginacompra" element={<PagCompra/>}/>
            <Route path="/paginamicuenta" element={<PagCuenta/>}/>
        </Routes>
    )    
}
export default PageRoutes