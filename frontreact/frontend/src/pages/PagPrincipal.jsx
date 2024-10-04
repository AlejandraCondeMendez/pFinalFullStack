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
            setBooks(getLbros)
        }
        console.log(books);
        traerLibros()
    },[])

    return(
        <>
        <Navbar/>
        <i className="fa-solid fa-user"></i> 
        <div className="icono d-flex gap-5">
        <i className="fa-regular fa-bell icono-bell"></i>
        <i className="fa-solid fa-cart-shopping icono-cart"></i>
        </div>
        <Search/>
        <SelectFiltro/>
        <p>Contador</p>
        <ListaBooks cardBooks={books}/>
        <a onClick={()=>navigate('/iniciosesion')}>Iniciar sesión</a>
        </>
    )
}
export default PagPrincipal