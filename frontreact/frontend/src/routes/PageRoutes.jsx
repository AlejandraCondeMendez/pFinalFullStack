import { Route,Routes } from "react-router-dom"
import Registro from "../pages/Registro"
import InicioSesion from "../pages/InicioSesion"
import PagPrincipal from "../pages/PagPrincipal"
import AcercaDnosotros from "../pages/AcercaDnosotros"
import LibrosAgregados from "../pages/LibrosAgregados"
import InfoLibro from "../pages/InfoLibro"
import PagCompra from "../pages/PagCompra"
import PagCuenta from "../pages/PagCuenta"
import RutasPrivadas from "./RutasPrivadas"
import RutaPrivada from "../components/RutaPrivada"

const PageRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Registro/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/iniciosesion" element={<InicioSesion/>}/>
            <Route path="/paginaprincipal" element={<PagPrincipal/>}/>
            <Route path="/librosagregados" element={<RutasPrivadas><LibrosAgregados/></RutasPrivadas>}/>
            <Route path="/nosotros" element={<AcercaDnosotros/>}/>
            <Route path="/informacionlibro" element={<InfoLibro/>}/>
            <Route path="/paginacompra" element={<RutasPrivadas><PagCompra/></RutasPrivadas>}/> {/*Ruta privada*/}
            <Route path="/paginamicuenta" element={<RutasPrivadas><PagCuenta/></RutasPrivadas>}/> {/*Ruta privada*/}
            <Route path="/rutaprivada" element={<RutaPrivada/>}/>
        </Routes>
    )    
}
export default PageRoutes