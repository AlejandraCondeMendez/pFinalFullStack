import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/PagPrincipal.css"

const LibrosDeseados =()=>{
    return(
        <>
        <Navbar/>
        <h1>Libros deseados</h1>
        <div style={{marginTop: 300}}>
            <Footer/>
        </div>
        </>
    )
}
export default LibrosDeseados