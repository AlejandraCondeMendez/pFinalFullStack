import { useState } from 'react';
import '../styles/HamburgerMenu.css';
import { useNavigate } from 'react-router-dom';
const HamburgerMenu = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-container">
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a style={{"cursor":"pointer"}} onClick={()=>navigate('/paginamicuenta')}>Mi cuenta</a></li>
                    <li><a style={{"cursor":"pointer"}} onClick={()=>navigate('/paginaprincipal')}>Página principal</a></li>
                    <li><a style={{"cursor":"pointer"}} onClick={()=>navigate('/nosotros')}>Acerca de nosotros</a></li>
                    <li className="library-dropdown">
                        <a style={{"cursor":"pointer"}} onClick={()=>navigate('/milibreria')}>Todos los libros</a>
                        <ul className="dropdown">
                            <li><a style={{"cursor":"pointer"}} onClick={()=>navigate('/librosagregados')}>Mis libros agregados</a></li>
                            <li><a style={{"cursor":"pointer"}} onClick={()=>navigate('/librosdeseados')}>Mis libros deseados</a></li>
                            <li><a style={{"cursor":"pointer"}} onClick={()=>navigate('/librosprestados')}>Mis libros prestados</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;

