/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import '../styles/PagAdmin.css';
import ModalBook from "../components/ModalBook";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import { getData } from "../services/fetch";
import ListaBooks from "../components/ListaBooks";
import ModalPut from '../components/ModalPut';
import { traerCookie } from "../services/cookies";

const LibrosAgregados = () => {
    const [librosID, setLibrosID] = useState([]);
    const [libroSelec, setLibroSelec] = useState(false); 
    const idCookie = traerCookie("localUsuarioID") || 0

    //Estado para contar la cantidad total de libros agregados
    const [contadorLibro, setContadorLibro] = useState(0)

    useEffect(() => {
            const getUserLibros = async () => {
                const librosID = await getData('librosUserID', idCookie + "/")
                setLibrosID(librosID)
                setContadorLibro(librosID.length)
            };
            getUserLibros();
    }, [librosID]);

    const handleEditarLibro = (infoLibro) => {
        setLibroSelec(infoLibro); 
    };

    return (
        <>
        <Navbar/>
        <div style={{marginTop: 1}}>
            <HamburgerMenu/>
        </div>

            {librosID.length === 0 && <p className="titulo-agregados">No hay libros agregados</p>}

            <div className="libros-agregados">
            <i className="fa-solid fa-plus"></i>
                    <span>Mis libros agregados</span>
            </div>
            <div style={{marginTop:'10%', marginBottom:'5%', display:'flex', gap:'35%', justifyContent:'center'}}>
                <ModalBook /> {/* botón 'agregar libro'- abre el Modal de agregar */}
                <p>Mis libros: {contadorLibro}</p>
            </div>
            <div className="d-flex gap-3 flex-wrap justify-content-center">
                <ListaBooks cardBooks={librosID} mostrarB={true} btnEditarL={handleEditarLibro} /> {/* Pasamos la función */}
            </div>

            {/* Modal de edición */}
            {libroSelec && (
                <ModalPut libroModal={libroSelec} setLibroModal={setLibroSelec}/> //cerrar y mostrar el modal
            )}

            <div style={{ marginTop: 400 }}>
                <Footer />
            </div>
        </>
    );
}
export default LibrosAgregados;
