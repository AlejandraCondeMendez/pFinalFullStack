import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Search from "../components/Search"
import "../styles/PagPrincipal.css"
import ListaBooks from "../components/ListaBooks"
import { useState,useEffect } from "react"
import { getData } from "../services/fetch"

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
        <Search/>
        <h1>Libreria virtual</h1>
        <ListaBooks cardBooks={books}/>
        <a onClick={()=>navigate('/iniciosesion')}>Iniciar sesión</a>
        </>
    )
}
export default PagPrincipal