import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { getData } from "../services/fetch"
import { useEffect, useState } from "react"
import ListaBooks from "../components/ListaBooks"
import CarruselLibro from "../components/CarruselLibro"
import "../styles/Carrusel.css"
import { useNavigate } from "react-router-dom"
import '../styles/InfoLibro.css'
import HamburgerMenu from "../components/HamburgerMenu"
import ListaComentarios from "../components/ListaComentarios"
import CardComentario from "../components/CardComentario"
const InfoLibro = () => {

    const LibrolocalD = localStorage.getItem('LibrolocalID')
    const [libroInfo, setLibroInfo] = useState([])
    const [libros, setLibros] = useState([])
    const navigate = useNavigate('')
    //ocupo un estado que me permita guardar los datos de los comentarios traídos desde el backend
    const [comentariosLibros, setComentariosLibros] = useState([])


    useEffect(() => {
        const libroInfoPag = async () => {
            const getLibros = await getData('libroID', LibrolocalD + "/")
            setLibroInfo(getLibros)
        }

        const traerLibros = async () => {
            const librosget = await getData('libros')
            setLibros(librosget)
        }

        const traerComentarios = async () => {
            const comentariosget = await getData('libros/comentarios', localStorage.getItem('LibrolocalID'))
            setComentariosLibros(comentariosget)
        }
        libroInfoPag()
        traerLibros()
        traerComentarios()
    }, [LibrolocalD, comentariosLibros])


    return (
        <>
            <Navbar />
            <div style={{ marginTop: 1 }}>
                <HamburgerMenu />
            </div>
            <div style={{position:'absolute', marginLeft:'46%', marginTop:'10%'}}>
                <h5>Comentarios</h5>
            </div>
            <div className="contenedor-libro-comentario">
                <div className="libro-info">
                    <ListaBooks cardBooks={libroInfo} mostrar={true} />
                </div>
                <div className="comentarios">
                    <div className="contenedor-comentarios" style={{marginTop: '30%', display: 'flex',flexDirection: 'column',gap: '22px',maxHeight: '550px',overflowY: 'auto',padding: '10px',border: '1px solid #ccc',borderRadius: '5px'}}>
                        <CardComentario habilitados={true}/>
                        <ListaComentarios comentarLista={comentariosLibros} habilitadosLista={false} />
                    </div>
                </div>
            </div>
            {/* hr de titulo */}
            <div className="libro-con-texto">
                <i className="fas fa-book"></i>
                <span style={{ "cursor": "pointer" }} onClick={() => navigate('/paginaprincipal')}>Todos los libros</span>
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