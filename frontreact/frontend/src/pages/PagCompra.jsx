import { useEffect, useState } from "react"
import { getData } from "../services/fetch"
import ListaCompra from "../components/ListaCompra"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HamburgerMenu from "../components/HamburgerMenu"
import Search from "../components/Search"
import CardPago from "../components/CardPago"
import '../styles/PagCompra.css'
import { useSearch } from "../components/BusquedaContext"

// Se crea PagComopra con el objetivo de gestionar el carrito de compras. Trae libros del localStorage, 
// los agrupa por su ID para sumar cantidades y precios, y finalmente, calcula el precio total.

const PagCompra = ()=>{
    const [compras, setCompras] = useState([])
    const localID = JSON.parse(localStorage.getItem('localCompras') || [])
    const [totalCompra,setTotalCompra] = useState(0)
    const {librosBuscados} = useSearch()
    //crear una función que me traiga los libros que esta SOLO en el local para mostrarlos en la página
    //creamos un array vacío para guardalos en cada iteración que se haga del local
    useEffect(()=>{
        if (librosBuscados && librosBuscados.length>0) {
            setCompras(librosBuscados)
        } else {
            const traerLibros = async ()=>{
                let librosArray = []
                for (let id = 0; id < localID.length; id++) { //se hace un for porque se necesita recorrer el local
                    const getLibros = await getData('libroID', localID[id]) //traermos los libros según el ID del libro que esta en el local
                    librosArray.push(getLibros) // se agregan esos libros que obtenemos del get en el array vacío
                    console.log(getLibros);
                }
                setCompras(librosArray.flat())
            }
            traerLibros()
        }
    },[librosBuscados,compras])

    // función para agrupar los libros según su ID 
    // organiza el array compras, agrupando libros con el mismo ID y calculando la cantidad y el precio total de cada grupo.
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
// Este useEffect se ejecuta cada vez que "agruparLibro" cambia, ello asgura que el precio total se recalcule cada vez
// que la lista de libros agrupados se modifique. 
// .reduce va a iterar sobre "agruparLibro" para calcular el "precioTotalLibros".
// "librosTotal" es el acumulador que se va sumando en cada iteración iniciando desde 0
// librosTotalAct es el elemento actual en la iteración y representa cada objeto en agruparLibro.
    useEffect(()=>{
        const totaLibros = agruparLibro.reduce((librosTotal, librosTotalAct) => //totalLibros contiene el precio total de todos los libros en agruparLibro
            librosTotal + librosTotalAct.precioTotalLibros, 0)
        setTotalCompra(totaLibros) //actualiza el estado compras con el valor de totaLibros
    },[agruparLibro])

    return(
        <>
        <Navbar/>
        <div style={{marginTop: 1}}>
            <HamburgerMenu/>
        </div>
        <div style={{marginBottom:'3%', marginTop:'-3%', marginLeft:'5%', position:'relative'}}>
            <Search/>
        </div>
        <ListaCompra compraCard={agruparLibro}/> 
        <CardPago total={totalCompra}/> 
        <div style={{marginTop: 200}}>
            <Footer/>
        </div> 
        </>
    )
}
export default PagCompra