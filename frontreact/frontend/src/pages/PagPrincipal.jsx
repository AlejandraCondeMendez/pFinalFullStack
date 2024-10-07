import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Search from "../components/Search"
import "../styles/PagPrincipal.css"
import ListaBooks from "../components/ListaBooks"
import { useState,useEffect } from "react"
import { getData } from "../services/fetch"
import SelectFiltro from "../components/SelectFiltro"

const PagPrincipal =()=>{
    const navigate = useNavigate()

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
        <i className="fa-solid fa-user icono-user"></i> 
        <div className="icono d-flex gap-5">
        <i className="fa-regular fa-bell icono-bell"></i>
        <i className="fa-solid fa-cart-shopping icono-cart"></i>
        </div>
        <div className="contenedor-enlaces">
        <a className="enlaces-navbar">Los más vendidos</a>
        <a className="enlaces-navbar">Novedades</a>
        </div>
        <Search/>
        <SelectFiltro/>
        <div className="d-flex gap-3 flex-wrap justify-content-center">
        <p>Libros disponibles para venta</p>
        <p>0</p>
        <p>Libros disponibles para préstamo</p>
        <p>0</p>
        </div>
      
        <div className="d-flex gap-3 flex-wrap justify-content-center">
        <ListaBooks cardBooks={books}/>
        </div>
        <a onClick={()=>navigate('/iniciosesion')}>Iniciar sesión</a>
        </>
    )
}
export default PagPrincipal