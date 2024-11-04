import Navbar from "../components/Navbar"
import HamburgerMenu from "../components/HamburgerMenu"
import Footer from "../components/Footer"
import '../styles/PagCuenta.css'
import FormCuenta from "../components/FormCuenta"

const PagCuenta = () =>{

    return (
        <>
        <Navbar/>
        <div style={{marginTop: 1}}>
            <HamburgerMenu/>
        </div>
        <div style={{textAlign:'center', marginTop:'4%'}}>
            <div style={{fontSize:'35px'}}>
                <i className="fa-solid fa-book-open-reader"></i>
            </div>
            <div>
                <h4>Mi cuenta</h4>
            </div>
        </div>
        
        <div>
            <FormCuenta/>
        </div>
        <div style={{marginTop: 600}}>
            <Footer/>
        </div>
        </>
    )
}
export default PagCuenta