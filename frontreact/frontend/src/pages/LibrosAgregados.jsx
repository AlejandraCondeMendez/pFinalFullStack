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
    const idCookie = traerCookie("localUsuarioID")
    useEffect(() => {
        const getUserLibros = async () => {
            const librosID = await getData('librosUserID', idCookie + "/");
            setLibrosID(librosID);
        };
        getUserLibros();
    }, [librosID]);

    const handleEditarLibro = (infoLibro) => {
        setLibroSelec(infoLibro); 
    };

    return (
        <>
            <Navbar />
            <div style={{ marginTop: -40 }}>
                <HamburgerMenu />
            </div>

            <div className="d-flex gap-3">
                <i className="fa-solid fa-plus"></i>
                <h3 className="text-nowrap text-title">Mis libros agregados </h3>
            </div>
            <hr />
            <p>Mis libros: </p>
            <ModalBook /> {/* Modal de agregar */}
            <ListaBooks cardBooks={librosID} mostrarB={true} btnEditarL={handleEditarLibro} /> {/* Pasamos la función */}

            {/* Modal de edición */}
            {libroSelec && (
                <ModalPut libroModal={libroSelec} setLibroModal={setLibroSelec}/> //cerrar y mostrar el modal
            )}

            <div style={{ marginTop: 300 }}>
                <Footer />
            </div>
        </>
    );
}
export default LibrosAgregados;
