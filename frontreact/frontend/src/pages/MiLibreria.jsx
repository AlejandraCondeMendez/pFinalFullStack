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

        <div style={{justifyContent:'center', textAlign:'center', marginTop:'4%'}}>
            <i className="fa-solid fa-book-open" style={{fontSize:'40px'}}></i>
            <h3>Librería</h3>
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