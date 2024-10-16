import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { getData } from "../services/fetch"
import { useEffect, useState } from "react"
import ListaBooks from "../components/ListaBooks"
import CarruselLibro from "../components/CarruselLibro"
import "../styles/Carrusel.css" 
const InfoLibro =()=>{

    const LibrolocalD = localStorage.getItem('LibrolocalID')
    const [libroInfo, setLibroInfo] = useState([])
    const [libros, setLibros] = useState([])

    useEffect(()=>{
    const libroInfoPag = async ()=>{
            const getLibros = await getData('libroID', LibrolocalD + "/" )
            setLibroInfo(getLibros)
    }

    const traerLibros = async()=>{
        const librosget = await getData('libros')
        setLibros(librosget)
    }
        libroInfoPag()
        traerLibros()

    },[])

    

    return(
        <>
        <Navbar/>
        <h1>Información del libro</h1>
        <ListaBooks cardBooks={libroInfo}  mostrar={true}/>
        <div>
            <a>Reseñas</a>
        </div>

        <div>
            <a>Recomendaciones</a>
        </div>
        <div className="carrusel">
        <CarruselLibro cardLibro={libros} mostrar={true}/>
        </div>
        <div style={{marginTop: 200}}>
            <Footer/>
        </div>
        </>
    )
}
export default InfoLibro