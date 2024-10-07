import '../styles/Footer.css'
import { useNavigate } from "react-router-dom"
import Mapa from './Mapa'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <footer>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>Acerca de Nosotros</h4>
                        <ul>
                            <p onClick={()=>{navigate('/nosotros'),window.scrollTo({
                                top:0,
                                behavior: 'smooth'})}} className='nosotros'>Quienes somos</p>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Mi cuenta</h4>
                        <ul>
                            <li>
                                <a onClick={()=>{navigate('/micuenta'),window.scrollTo({
                                top:0,
                                behavior: 'smooth'})}}>Mis libros agregados</a>
                            </li>
                            <li>
                                <a>Mis libros deseados</a>
                            </li>
                            <li>
                                <a>Mis libros prestados</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column ">
                        <h4 className='titulo-footer'>Contacto</h4>
                        <Mapa/> 
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2024. Todos los derechos reservados.</p>
                </div>
            </footer>
        </>
    )
}
export default Footer