/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { acceptPopUp, muestraAlerta } from "../services/alertas";
import { deleteData } from "../services/fetch";
import CardBook from "./CardBook";

const ListaBooks = ({ cardBooks, mostrar, mostrarB, btnEditarL, btnInfoL}) => {
    
    const localStorageLibro = localStorage.getItem('carrito')
    const [carro, setCarro] = useState(localStorageLibro ? JSON.parse(localStorageLibro) : [])
    
    const eliminaLibro = async (id) => {
        const alerta = await acceptPopUp("Estás intentando eliminar un libro, ¿Continuar?", "El libro se eliminó con éxito", "La eliminación del libro fue cancelada");
        if (alerta) {
            console.log(id);
            await deleteData('librosDelete', id + "/");
        }
    }

    const btnAgregarL = async(iterar) =>{
        const libroCarrito = carro.filter(libroIterar => libroIterar === iterar.id).length
        if(libroCarrito >= 10){
            muestraAlerta('La cantidad solicitada no está disponible', 'error')
        } else{
            setCarro([...carro, iterar.id])
        }
    }

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carro))
    },[carro])

    return (
        <>
            {cardBooks.map((iterar, index) => (
                <div key={index}>
                    <CardBook
                        key = {iterar.id}
                        tituloCard = {iterar.titulo} //BD
                        usuarioCard = {iterar.usuarioLibro_nombre}
                        autorCard = {iterar.autor}
                        estadoCard = {iterar.estado}
                        categoriaCard = {iterar.categoria}
                        ubicacionCard = {iterar.ubicacion}
                        precioCard = {iterar.precio}
                        mostrarBoton = {mostrar}
                        mostrarBotonB = {mostrarB}
                        btnInfo={()=>btnInfoL(localStorage.setItem('LibrolocalID', iterar.id))}
                        btnEliminar = {() => eliminaLibro(iterar.id)}
                        btnEditar = {() => btnEditarL(iterar)} // En lista books está la función
                        btnAgregar = {()=> btnAgregarL(iterar)}

                        // Iterar trae todos los datos 
                    />
                </div>
            ))}
        </>
    );
}
export default ListaBooks;