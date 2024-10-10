import Navbar from "../components/Navbar"
import '../styles/PagAdmin.css'
import ModalBook from "../components/ModalBook"
import Footer from "../components/Footer"
import HamburgerMenu from "../components/HamburgerMenu"
import { useEffect, useState } from "react"
import { getData } from "../services/fetch"
import ListaBooks from "../components/ListaBooks"
import ModalPut from '../components/ModalPut'

const LibrosAgregados=()=>{
    const [actualizar, setActualizar]=useState(null)
    const [librosID, setLibrosID] = useState([])


    const [modalShowUpdate, setModalShowUpdate] = useState(false);


    useEffect(()=>{
        const getUserLibros = async()=>{
            const librosID = await getData('librosID',localStorage.getItem("localUsuarioID")+"/")
            setLibrosID(librosID)
        }
        console.log(librosID);
        getUserLibros()
    }, [librosID])

    const actualizarDatos = (id,titulo,autor,cantidad,direccion,estado,categoria)=>{ //propiedades del libro que queremos editar
        setActualizar({id,titulo,autor,cantidad,direccion,estado,categoria})//y luego se lo actualizamos al estado
        setModalShowUpdate(true) //MOSTRAR EL MODAL
    }
    
    return(
        <>
        <Navbar />

        <div style={{marginTop: -40}}>
            <HamburgerMenu/>
        </div>

        <div className="d-flex gap-3">
            <i className="fa-solid fa-plus"></i>
            <h3 className="text-nowrap text-title">Mis libros agregados </h3>
        </div>
            <hr/>
        <p>Mis libros: </p>
        <ModalBook/>
        <ListaBooks cardBooks={librosID} mostrarB={true} btnEditarL={actualizarDatos}/>
        
        {actualizar && 
        <ModalPut
            mostrar={modalShowUpdate}
            ocultar={()=>setModalShowUpdate(false)}
            id={actualizar.id}//accedemos a la propiedad del estado
            titulo={actualizar.titulo}
            autor={actualizar.autor}
            cantidad={actualizar.cantidad}
            ubicacion={actualizar.direccion}
            categoria={actualizar.categoria}
            estado={actualizar.estado}
            btnEditarProp={actualizarDatos}
            />
        }
        
        <div style={{marginTop: 300}}>
            <Footer/>
        </div>
        </>
    )
}
export default LibrosAgregados