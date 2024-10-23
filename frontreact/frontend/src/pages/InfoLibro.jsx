import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { getData } from "../services/fetch"
import { useEffect, useState } from "react"
import ListaBooks from "../components/ListaBooks"
import CarruselLibro from "../components/CarruselLibro"
import "../styles/Carrusel.css"
import { useNavigate } from "react-router-dom"
import '../styles/InfoLibro.css'
import Form from "../components/Form"
import Search from "../components/Search"
import HamburgerMenu from "../components/HamburgerMenu"
import Comentarios from "../components/Comentarios"


const InfoLibro = () => {

    const LibrolocalD = localStorage.getItem('LibrolocalID')
    const [libroInfo, setLibroInfo] = useState([])
    const [libros, setLibros] = useState([])
    const navigate = useNavigate('')

    useEffect(() => {
        const libroInfoPag = async () => {
            const getLibros = await getData('libroID', LibrolocalD + "/")
            setLibroInfo(getLibros)
        }

        const traerLibros = async () => {
            const librosget = await getData('libros')
            setLibros(librosget)
        }
        libroInfoPag()
        traerLibros()
    }, [LibrolocalD])


    return (
        <>
            <Navbar />
            <div style={{ marginTop: -40 }}>
                <HamburgerMenu />
            </div>
            <Search />
            <div className="libro-info">
                <ListaBooks cardBooks={libroInfo} mostrar={true} />
            </div>

            <div className="form-contacto">
                <Form />
            </div>

            <section className="seccion-enlaces" style={{ gap: 300}}>
                <div className="enlaceReseña">
                    <a>Reseñas</a>
                </div>
                <div className="enlaceReseña">
                    <a>Recomendaciones</a>
                </div>
            </section>
            <div className="comentarios-box">
                <Comentarios/>
            </div>

        {/* hr de titulo */}
            <div className="libro-con-texto">
            <i className="fas fa-book"></i>
                    <span style={{"cursor":"pointer"}} onClick={()=>navigate('/paginaprincipal')}>Todos los libros</span>
            </div>

            <div className="carrusel" style={{ width: '90%', left: 40 }}>
                <CarruselLibro cardLibro={libros} mostrar={true} btnInfoL={() => {
                    navigate('/informacionlibro'), window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }} />
            </div>
            <div style={{ marginTop: 200 }}>
                <Footer />
            </div>
        </>
    )
}
export default InfoLibro