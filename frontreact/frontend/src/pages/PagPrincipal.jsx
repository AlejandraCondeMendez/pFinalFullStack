/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar"
import Search from "../components/Search"
import "../styles/PagPrincipal.css"
import ListaBooks from "../components/ListaBooks"
import { useState,useEffect } from "react"
import { getBusqueda, getData } from "../services/fetch"
import SelectFiltro from "../components/SelectFiltro"
import Footer from "../components/Footer"
import HamburgerMenu from "../components/HamburgerMenu"
import { useNavigate } from "react-router-dom"

const PagPrincipal =()=>{
    const navigate = useNavigate()
    const [books, setBooks] = useState ([])
    const [filtroCate, setFiltroCate] = useState('')
    const [contadorVenta, setContadorVenta ] = useState(0)
    const [contadorPrestamo, setContadorPrestamo] = useState(0)

    useEffect(()=>{ //get que trae todo los libros de la API
        const traerLibros = async()=>{
            const getLibros = await getData('libros')
            setBooks(getLibros)
        }
        const contadores =async()=>{
            const venta = await getBusqueda('estado', 'Venta')
            const prestamo = await getBusqueda('estado', 'Préstamo')
            setContadorVenta(venta.length)
            setContadorPrestamo(prestamo.length)
            
        }
        contadores()
        traerLibros()
    },[])

    const filtros = async (tipo)=>{
        setFiltroCate(tipo)
        if (tipo) {
            const librosFiltro = await getBusqueda('categoria', tipo)
            setBooks(librosFiltro)
        } else if(tipo === "") {
            const librosFiltro = await getData('libros')
            setBooks(librosFiltro)
        }
    }
    return(
        <>
        <Navbar/>
        <div style={{marginTop: -40}}>
            <HamburgerMenu/>
        </div>
        <Search/>
        <div className="w-25 mx-auto mt-3">
        <SelectFiltro tipoFiltro={filtros}/>
        </div>
        <div className="d-flex gap-5 flex-wrap justify-content-center" style={{marginTop:'5%', marginBottom:'5%'}}>
            <div className="d-flex flex-column">
                <p>Libros disponibles para venta</p>
                <p className="text-center">{contadorVenta}</p>
            </div>
            <div className="d-flex flex-column">
                <p>Libros disponibles para préstamo</p>
                <p className="text-center">{contadorPrestamo}</p>
            </div>
        </div>
      
        <div className="d-flex gap-3 flex-wrap justify-content-center">
        <ListaBooks cardBooks={books} mostrar={true} btnInfoL={()=>navigate('/informacionlibro')}/>
        </div>
        <div style={{marginTop: 200}}>
            <Footer/>
        </div>

        </>
    )
}
export default PagPrincipal