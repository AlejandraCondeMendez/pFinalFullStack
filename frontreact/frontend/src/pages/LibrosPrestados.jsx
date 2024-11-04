import "../styles/PagPrincipal.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HamburgerMenu from "../components/HamburgerMenu"

const LibrosPrestados=()=>{
    return(
        <>
        <Navbar/>
        <div style={{marginTop: 1}}>
            <HamburgerMenu/>
        </div>
        <h1>Libros prestados</h1>
        <div style={{marginTop: 200}}>
            <Footer/>
        </div>
        </>
    )
}
export default LibrosPrestados