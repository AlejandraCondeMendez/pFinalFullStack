import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HamburgerMenu from "../components/HamburgerMenu"
import Search from "../components/Search"
import { useNavigate } from "react-router-dom"

const MiLibreria=()=>{
    const navigate = useNavigate()

    return(
        <>
        <Navbar/>

        <div style={{marginTop: -40}}>
            <HamburgerMenu/>
        </div>
    
        <Search/>
        <div style={{textAlign:'center', marginTop:'4%'}}>
            <div style={{fontSize:'35px'}}>
                <i className="fa-solid fa-book-open"></i>
            </div>
            <div>
                <h4>Librería</h4>
            </div>
        </div>

        <div className="libros-agregados">
            <i className="fa-solid fa-book-bookmark" style={{fontSize:'30px'}}></i>
            <span style={{"cursor":"pointer"}} onClick={()=>navigate('/librosdeseados')}>Mis libros deseados</span>
        </div>

        <div className="libros-agregados"style={{marginTop:'20%'}}>
            <i className="fa-solid fa-right-left" style={{fontSize:'25px'}}></i>
            <span style={{"cursor":"pointer"}} onClick={()=>navigate('/librosprestados')}>Mis libros prestados</span>
        </div>
        <div className="libros-agregados" style={{marginTop:'35%'}}>
            <i className="fa-solid fa-plus" style={{fontSize:'30px'}}></i>
            <span style={{"cursor":"pointer"}} onClick={()=>navigate('/librosagregados')}>Mis libros agregados</span>
        </div>

        <div style={{marginTop: 700}}>
            <Footer/>
        </div>
        </>
    )
}
export default MiLibreria