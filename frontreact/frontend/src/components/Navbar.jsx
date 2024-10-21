import { useNavigate } from 'react-router-dom';
import '../styles/PagPrincipal.css';

const Navbar = () => {
    
    const navigate = useNavigate()
    return (
        <>
            <nav className="navbar" style={{backgroundColor: "#FFBE2D"}}>
                <div className="container-fluid d-flex align-items-center">
                    {/* Icono de usuario alineado a la izquierda */}
                    <div className="navbar-icon user-icon">
                        <i className="fas fa-user"></i>
                        <div className="iniciar-sesion">
                            <a style={{"cursor":"pointer"}} onClick={()=>navigate('/iniciosesion')} className="session-link">Iniciar sesión</a>
                        </div>
                    </div>

                    {/* Logo centrado */}
                    <a className="navbar-brand text-light titulo-navbar mx-auto" style={{"cursor":"pointer"}} onClick={()=>navigate('/paginaprincipal')}>
                        <strong className='titulo-liberty'>LibertyBooks</strong>
                    </a>

                    {/* Iconos de carrito y campanita alineados a la derecha */}
                    <div className="navbar-icon cart-icon ms-auto">
                        <i style={{"cursor":"pointer"}} className="fas fa-bell"></i>
                    </div>
                    <div className="navbar-icon cart-icon">
                        <i style={{"cursor":"pointer"}} className="fas fa-shopping-cart" onClick={()=>navigate('/paginacarro')}></i>
                    </div>
                </div>
            </nav>

            {/* Menú de categorías debajo del navbar */}
            <div className="navbar-categories">
                <div className="category-item">
                    <a href="/ficcion" className="category-link">FICCIÓN</a>
                    <div className="dropdown-menu">
                        <a href="/ficcion/novelas" className="dropdown-item">Novelas</a>
                        <a href="/ficcion/cuentos" className="dropdown-item">Cuentos</a>
                    </div>
                </div>
                <div className="category-item">
                    <a href="/infantil" className="category-link">INFANTIL</a>
                    <div className="dropdown-menu">
                        <a href="/infantil/libros" className="dropdown-item">Libros</a>
                        <a href="/infantil/cuentos" className="dropdown-item">Cuentos</a>
                    </div>
                </div>
                {/* Agrega más categorías según sea necesario */}
            </div>
        </>
    );
};

export default Navbar;
