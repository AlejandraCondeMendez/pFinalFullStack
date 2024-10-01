import Navbar from "../components/Navbar"
import '../styles/PagAdmin.css'
import ModalBook from "../components/ModalBook"

const PagAdmin=()=>{
    
    return(
        <>
        <Navbar/>
        <div className="d-flex gap-3">
            <i className="fa-solid fa-plus"></i>
            <h3 className="text-nowrap text-title">Mis libros agregados </h3>
        </div>
            <hr/>
        <p>Mis libros: </p>
        <ModalBook/>
        </>
    )
}
export default PagAdmin