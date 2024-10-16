import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { getData } from "../services/fetch"
import { useEffect, useState } from "react"
import ListaBooks from "../components/ListaBooks"
import CarruselLibro from "../components/CarruselLibro"
import "../styles/Carrusel.css" 
import { useNavigate } from "react-router-dom"
import '../styles/InfoLibro.css'


const InfoLibro =()=>{

    const LibrolocalD = localStorage.getItem('LibrolocalID')
    const [libroInfo, setLibroInfo] = useState([])
    const [libros, setLibros] = useState([])
    const navigate = useNavigate('')

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
    },[LibrolocalD])
    

    return(
        <>
        <Navbar/>
        <h1>Información del libro</h1>
        <ListaBooks cardBooks={libroInfo}  mostrar={true}/>
        <div className="enlaceReseña"> 
            <a>Reseñas</a>
        </div>

        <div className="enlaceReco">
            <a>Recomendaciones</a>
        </div>
        <div className="carrusel">
        <CarruselLibro cardLibro={libros} mostrar={true} btnInfoL={()=>{navigate('/informacionlibro'), window.scrollTo({
            top:0,
            behavior: 'smooth'
        })}}/>
        </div>
        <div style={{marginTop: 200}}>
            <Footer/>
        </div>
        </>
    )
}
export default InfoLibro