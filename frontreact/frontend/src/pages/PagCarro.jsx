import { useEffect, useState } from "react"
import {getData} from '../services/fetch'
import ListaCarros from "../components/ListaCarros"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HamburgerMenu from "../components/HamburgerMenu"
import Search from "../components/Search"


const PagCarro =()=>{
    
    const localStorageID = JSON.parse(localStorage.getItem('carrito') || '[]')
    const [librosCarro, setLibrosCarro] = useState([]) //guardar libros en el estado
//se van a mostrar los libros que estan en el local

    useEffect(()=>{
        const mostrarLibros = async()=>{
            const arrayLibros = [] //guardar los libros en cada recorrido
            for (let id = 0; id < localStorageID.length; id++) {
                const librosget = await getData('libroID', localStorageID[id] + '/') //petición al get, según el ID que estoy recorriendo
                arrayLibros.push(librosget)
            }
            setLibrosCarro(arrayLibros.flat())
        }
        mostrarLibros()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[librosCarro])

    //juntar los libros (card) que tengan el mismo ID
    const agruparLibroID = librosCarro.reduce((acumulador, libros)=> { // valor anterior a la iteración, valor actual
        const buscarLibroAgregado = acumulador.find(iterar => iterar.id === libros.id)
        if (buscarLibroAgregado) {
            buscarLibroAgregado.precioCard += libros.precio
            buscarLibroAgregado.cantidad += 1
        } else{
            acumulador.push({...libros, precioCard:libros.precio, cantidad:1})
        }
        return acumulador
    }, []) //inicializa como un arreglo vacío

    return(
        <>
        <Navbar/>
        <div style={{marginTop: -40}}>
        <HamburgerMenu/>
        </div>
        <Search/>
        <h3>Mis pedidos</h3>
        <ListaCarros cardCarro={agruparLibroID}/>
        <div style={{marginTop: 200}}>
            <Footer/>
        </div>

        </>
    )
}
export default PagCarro