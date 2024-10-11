import Navbar from "../components/Navbar"
import '../styles/PagAdmin.css'
import ModalBook from "../components/ModalBook"
import Footer from "../components/Footer"
import HamburgerMenu from "../components/HamburgerMenu"
import { useEffect, useState } from "react"
import { getData, putData } from "../services/fetch"
import ListaBooks from "../components/ListaBooks"
import ModalPut from '../components/ModalPut'

const LibrosAgregados=()=>{
    const [actualizar, setActualizar]=useState(null)
    const [librosID, setLibrosID] = useState([])


    const [modalShowUpdate, setModalShowUpdate] = useState(false);

    async function putData(obj, id) {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/librosPut/${id}/`, { // Cambiado para que obj no esté en la URL
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json', // Corregido el nombre del encabezado
                },
                body: JSON.stringify(obj)
            });
            const data = await response.json();
            return data;   
        } catch (e) {
            console.log(e);
            return null;
        }  
    } 

    useEffect(()=>{
        const getUserLibros = async()=>{
            const librosID = await getData('librosID',localStorage.getItem("localUsuarioID")+"/")
            console.log(librosID);
            setLibrosID(librosID)

        }
        getUserLibros()
    }, [])
    const actualizarLibro = async (id, titulo, autor, estado, categoria, ubicacion) => {
        let libroActualizado = {
            id:id,
            titulo: titulo,
            autor: autor,
            estado: estado ? "Venta" : "Intercambio", 
            categoria: "categoria",
            ubicacion: ubicacion,
            usuarioLibro: localStorage.getItem("localUsuarioID")
        };
    
        const response = await fetch(`http://127.0.0.1:8000/api/librosPut/${id}/`,{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json', // Corregido el nombre del encabezado
            },
            body: JSON.stringify(libroActualizado)
        }) 
             const data = await response.json();
             console.log(libroActualizado);
            setModalShowUpdate(false); // OCULTAR EL MODAL
            return data;       
    };
    
    const actualizarDatos = (id,titulo,autor,estado,categoria,ubicacion)=>{ //propiedades del libro que queremos editar
        setActualizar({id,titulo,autor,estado,categoria,ubicacion})//y luego se lo actualizamos al estado
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
            tituloProp={actualizar.titulo}
            autorProp={actualizar.autor}
            estadoProp={actualizar.estado}
            categoriaProp={actualizar.categoria}
            ubicaProp={actualizar.ubicacion}
            btnEditarProp={actualizarLibro}
            />
        }
        
        <div style={{marginTop: 300}}>
            <Footer/>
        </div>
        </>
    )
}
export default LibrosAgregados