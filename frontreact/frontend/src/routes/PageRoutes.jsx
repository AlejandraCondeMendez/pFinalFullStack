import { Route,Routes } from "react-router-dom"
import Registro from "../pages/Registro"

const PageRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Registro/>}/>

        </Routes>
    )    
}
export default PageRoutes