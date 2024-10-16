import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { getData } from "../services/fetch"
import { useEffect, useState } from "react"
import ListaBooks from "../components/ListaBooks"

const InfoLibro =()=>{

    const LibrolocalD = localStorage.getItem('LibrolocalID')

    const [libroInfo, setLibroInfo] = useState([])

    useEffect(()=>{
    const libroInfoPag = async ()=>{
            const getLibros = await getData('libroID', LibrolocalD + "/" )
            setLibroInfo(getLibros)
    }
        libroInfoPag()
    },[])

    return(
        <>
        <Navbar/>
        <h1>Información del libro</h1>
        <ListaBooks cardBooks={libroInfo}  mostrar={true}/>
        <Footer/>
        </>
    )
}
export default InfoLibro