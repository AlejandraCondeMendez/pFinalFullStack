import Navbar from "../components/Navbar"
import '../styles/PagAdmin.css'
import ModalBook from "../components/ModalBook"
import Footer from "../components/Footer"
import HamburgerMenu from "../components/HamburgerMenu"
import { useEffect, useState } from "react"
import { getData } from "../services/fetch"
import ListaBooks from "../components/ListaBooks"

const LibrosAgregados=()=>{
    const [librosID, setLibrosID] = useState([])

    useEffect(()=>{
        const getUserLibros = async()=>{
            const librosID = await getData('librosID',localStorage.getItem("localUsuarioID")+"/")
            setLibrosID(librosID)
        }
        console.log(librosID);
        getUserLibros()
    }, [librosID])

    
    return(
        <>
        <Navbar />

        <div style={{marginTop: -40}}>
            <HamburgerMenu/>
        </div>

        <div className="d-flex gap-3">
            <i className="fa-solid fa-plus"></i>
            <h3 className="text-nowrap text-title">Mis libros agregados </h3>
        </div>
            <hr/>
        <p>Mis libros: </p>
        <ModalBook/>
        <ListaBooks cardBooks={librosID} mostrarB={true}/>
        <div style={{marginTop: 300}}>
            <Footer/>
        </div>
        </>
    )
}
export default LibrosAgregados