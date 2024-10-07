import Navbar from "../components/Navbar"
import '../styles/AcercaDnosotros.css'
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"
import '../styles/PagPrincipal.css'
import Search from "../components/Search"
const AcercaDnosotros = () => {

    const navigate = useNavigate()

    return (
        <>
            <Navbar/>

            <i className="fa-solid fa-user icono-user"></i>
            <a className="inicio-sesion" onClick={() => navigate('/iniciosesion')}>Iniciar sesión</a>

            <div className="icono d-flex gap-5">
                <i className="fa-regular fa-bell icono-bell"></i>
                <i className="fa-solid fa-cart-shopping icono-cart"></i>
            </div>
            <div className="contenedor-enlaces">
                <a className="enlaces-navbar">Los más vendidos</a>
                <a className="enlaces-navbar">Novedades</a>
            </div>
            <Search/>

            <h1 className="titulo-nosotros">Acerca de LibertyBooks</h1>
            <h2 className="subAcercaA">Historia</h2>
            <hr className="linea" />
            <div>
                <p className="divAcercaA">LibertyBook nació de la pasión por la lectura y el deseo de compartir el amor por los libros con
                    la comunidad. Todo comenzó cuando la fundadora se dio cuenta de que muchas personas tienen sus estanterías
                    llenas de libros que ya han leído y que podrían ser útiles para otros lectores. Debdo a ello se decidió crear
                    una plataforma donde los libros usados pudieran tener una segunda vida, permitiendo a las personas
                    descubrir nuevas historias y conocimientos sin tener que comprar libros nuevos. Así, en julio del 2023, nació
                    LibertyBook, con la misión de conectar a los amantes de la lectura y fomentar un intercambio sostenible
                    de libros.</p>
            </div>
            <hr />

            <h2 className="subAcercaB">Misión</h2>
            <p className="divAcercaB">Nuestra misión en LibertyBook es promover la lectura accesible y sostenible al facilitar la compra, venta
                y el intercambio de libros usados entre lectores. Nos comprometemos a crear una comunidad donde cada
                libro encuentre un nuevo hogar y cada lector encuentre su próxima gran historia sin dañar el medio
                ambiente.</p>

            <h2 className="subAcercaC">Visión</h2>
            <hr className="linea" />
            <p className="divAcercaC">Nuestra visión es convertirnos en la plataforma líder a nivel comunal para el intercambio y venta de
                libros usados, fomentando una cultura de reutilización y amor por la lectura. Aspiramos a ser el lugar
                donde cada libro tenga múltiples vidas y donde los lectores de todo el mundo puedan conectarse y
                compartir sus pasiones literarias.</p>

            <h2 className="subValores">Valores</h2>
            <ul className="divValores">
                <li className="acceso"><strong>Accesibilidad</strong></li>
                <p className="divAcceso">Creemos que la lectura debe estar al alcance de todos, independientemente de su
                    situación económica.</p>
                <li className="calidad"><strong>Calidad</strong></li>
                <p className="divCalidad">Nos aseguramos de que cada libro en nuestra plataforma esté en buenas condiciones y sea apto
                    para su nuevo dueño.</p>
                <li className="comu"><strong>Comunidad</strong></li>
                <p className="divComu">Fomentamos una comunidad inclusiva y solidaria donde los lectores puedan intercambiar
                    ideas y conocimientos.</p>
            </ul>
            <h2 className="comentarios">Comentarios</h2>
            <Footer />
        </>
    )
}

export default AcercaDnosotros