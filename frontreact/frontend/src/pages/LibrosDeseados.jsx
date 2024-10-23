import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/PagPrincipal.css"
import HamburgerMenu from "../components/HamburgerMenu"

const LibrosDeseados =()=>{

    return(
        <>
        <Navbar/>
        <div style={{marginTop: -40}}>
            <HamburgerMenu/>
        </div>
        <h1>Libros deseados</h1>
        <div style={{marginTop: 300}}>
            <Footer/>
        </div>
        </>
    )
}
export default LibrosDeseados