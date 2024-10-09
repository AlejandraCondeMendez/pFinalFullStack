import Navbar from "../components/Navbar"
import Search from "../components/Search"
import "../styles/PagPrincipal.css"
import ListaBooks from "../components/ListaBooks"
import { useState,useEffect } from "react"
import { getData } from "../services/fetch"
import SelectFiltro from "../components/SelectFiltro"
import Footer from "../components/Footer"
import HamburgerMenu from "../components/HamburgerMenu"

const PagPrincipal =()=>{

    const [books, setBooks] = useState ([])
    useEffect(()=>{
        const traerLibros = async()=>{
            const getLbros = await getData('libros')
            console.log(getLbros);
            
            setBooks(getLbros)
        }
        console.log(books);
        traerLibros()
    },[])

    return(
        <>
        <Navbar/>
        <div style={{marginTop: -40}}>
        <HamburgerMenu/>
        </div>
        <Search/>
        <div className="w-25 mx-auto mt-3">
        <SelectFiltro/>
        </div>
        <div className="d-flex gap-3 flex-wrap justify-content-center">
        <div className="d-flex flex-column">
        <p>Libros disponibles para venta</p>
        <p className="text-center">0</p>
        </div>
        <div className="d-flex flex-column">
        <p>Libros disponibles para préstamo</p>
        <p className="text-center">0</p>
        </div>
        </div>
      
        <div className="d-flex gap-3 flex-wrap justify-content-center">
        <ListaBooks cardBooks={books} mostrar={true}/>
        </div>
        <div style={{marginTop: 200}}>
            <Footer/>
        </div>

        </>
    )
}
export default PagPrincipal