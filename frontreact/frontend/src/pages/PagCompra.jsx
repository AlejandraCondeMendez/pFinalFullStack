import { useEffect, useState } from "react"
import { getData } from "../services/fetch"
import ListaCompra from "../components/ListaCompra"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HamburgerMenu from "../components/HamburgerMenu"
import Search from "../components/Search"

const PagCompra = ()=>{

    const [compras, setCompras] = useState([])
    const localID = JSON.parse(localStorage.getItem('localCompras') || '[]')

    //crear una función que me traiga los libros que esta SOLO en el local para mostrarlos en la página
    //creamos un array vacío para guardalos en cada iteración que se haga del local
    useEffect(()=>{
        const traerLibros = async ()=>{
            let librosArray = []
            for (let id = 0; id < localID.length; id++) { //se hace un for porque se necesita recorrer el local
                const getLibros = await getData('libroID', localID[id]) //traermos los libros según el ID del libro que esta en el local
                librosArray.push(getLibros) // se agregan esos libros que obtenemos del get en el array vacío
        }
        setCompras(librosArray.flat())
        }
        traerLibros()
    },[])

    // función para agrupar los libros según su ID 
    const agruparLibro = compras.reduce((libroAnt, libroAc)=>{ //compras ya tiene libros - reduce tiene un arreglo desordanado, lo toma y los ordena
        const librosCompras = libroAnt.find(libros => libros.id === libroAc.id) // libros compras tiene todas las propiedades del libro porque es parte del reduce del estado 'compras' - Busca en el arreglo y busca los ID's iguales para sumar cantidad y precio
        if (librosCompras) {
            librosCompras.cantidadLibros += 1
            librosCompras.precioTotalLibros += libroAc.precio 
        } else {
            libroAnt.push({...libroAc, cantidadLibros:1, precioTotalLibros: libroAc.precio})
        }
        return libroAnt
    }, []) //valor inicial del reduce, inicialmente inicia como vacío 

    return(
        <>
        <Navbar/>
        <HamburgerMenu/>
        <Search/>      
        <ListaCompra compraCard={agruparLibro}/> 

        <div style={{marginTop: 200}}>
            <Footer/>
        </div> 
        </>
    )
}
export default PagCompra