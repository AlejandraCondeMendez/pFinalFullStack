import React from 'react';
import '../styles/PagPrincipal.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar" style={{backgroundColor: "#FFBE2D"}}>
                <div className="container-fluid d-flex align-items-center">
                    {/* Icono de usuario alineado a la izquierda */}
                    <div className="navbar-icon user-icon">
                        <a href="/perfil"><i className="fas fa-user"></i></a>
                        <div className="iniciar-sesion">
                            <a href="/iniciar-sesion" className="session-link">Iniciar sesión</a>
                        </div>
                    </div>

                    {/* Logo centrado */}
                    <a className="navbar-brand text-light titulo-navbar mx-auto" href="/paginaprincipal">
                        <strong>LibertyBooks</strong>
                    </a>

                    {/* Iconos de carrito y campanita alineados a la derecha */}
                    <div className="navbar-icon cart-icon ms-auto">
                        <a href="/notificaciones"><i className="fas fa-bell"></i></a>
                    </div>
                    <div className="navbar-icon cart-icon">
                        <a href="/carrito"><i className="fas fa-shopping-cart"></i></a>
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
        