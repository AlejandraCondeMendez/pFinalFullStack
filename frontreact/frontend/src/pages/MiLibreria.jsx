import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HamburgerMenu from "../components/HamburgerMenu"

const MiLibreria=()=>{
    return(
        <>
        <Navbar/>

        <div style={{marginTop: -40}}>
            <HamburgerMenu/>
        </div>

        <h1>Librería</h1>

        <p>Mis libros deseados</p>
        <p>Mis libros prestados</p>
        <p>Mis libros agregados</p>

        <div style={{marginTop: 200}}>
            <Footer/>
        </div>
        </>
    )
}
export default MiLibreria