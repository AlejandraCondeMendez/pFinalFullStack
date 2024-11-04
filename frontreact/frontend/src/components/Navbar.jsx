import { useNavigate } from 'react-router-dom';
import '../styles/PagPrincipal.css';
import { borrarCookies, traerCookie } from '../services/cookies';

const Navbar = () => {
    const navigate = useNavigate()
    const cerrarSesion = ()=>{
        navigate('/iniciosesion')
        localStorage.clear()
        borrarCookies()
    }    

    return (
        <>
            <nav className="navbar" style={{backgroundColor: "#FFBE2D"}}>
                <div className="container-fluid d-flex align-items-center">
                    {/* Icono de usuario alineado a la izquierda */}
                    <div className="navbar-icon user-icon">
                        <i className="fas fa-user"></i>
                        <div className="iniciar-sesion">
                            <a style={{"cursor":"pointer"}} onClick={cerrarSesion} className="session-link">{traerCookie('localUsuarioID') ? 'cerrar sesión' : 'iniciar sesión'}</a>
                        </div>
                    </div>

                    {/* Logo centrado */}
                    <a className="navbar-brand text-light titulo-navbar mx-auto" style={{"cursor":"pointer"}} onClick={()=>navigate('/paginaprincipal')}>
                        <strong className='titulo-liberty'>LibertyBooks</strong>
                    </a>
                    {traerCookie("localUsuarioID") &&
                    <div style={{position:'absolute', marginLeft:'75%', marginTop:'1%'}}>
                        <p>¡Bienvenido {traerCookie("nombreUsuario")}!</p>
                    </div>
                    }
                    {/* Iconos de carrito y campanita alineados a la derecha */}
                    <div className="navbar-icon cart-icon">
                        <i style={{"cursor":"pointer"}} className="fas fa-shopping-cart" onClick={()=>navigate('/paginacompra')}></i>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
