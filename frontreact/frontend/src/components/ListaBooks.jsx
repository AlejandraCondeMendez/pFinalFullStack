/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { acceptPopUp, muestraAlerta } from "../services/alertas";
import { deleteData } from "../services/fetch";
import CardBook from "./CardBook";
import { crearCookie, traerCookie } from "../services/cookies";
import '../styles/ListaBooks.css'

// JSON.stringfy (objeto js en una cadena de texto en formato JSON.)
// JSON.parse (formato JSON a un objeto js)

const ListaBooks = ({ cardBooks, mostrar, mostrarB, btnEditarL, btnInfoL}) => {
    
    const localStorageLibro = localStorage.getItem('localCompras') // obtener los ID de los libros  
    const [compras, setCompras] = useState(localStorageLibro ? JSON.parse(localStorageLibro) : []) // si el local no tiene datos va a iniciar en un array vacío
    
   //Estados para el boton de btnPrestamo
   const [modal, setModal] = useState(false) //manejo del modal
   const [libro, setLibro] = useState({}) // va a manejar las propiedades de libro
   const [fechaInicio, setFechaInicio] = useState('')
   const [fechaFin, setFechaFin] = useState('')
   


    const cerrarModal = () => setModal(false)

    //FUNCIÓN: Elimina el libro según su ID
    const eliminaLibro = async (id) => {
        const alerta = await acceptPopUp("Estás intentando eliminar un libro, ¿Continuar?", "El libro se eliminó con éxito", "La eliminación del libro fue cancelada");
        if (alerta) {
            console.log(id);
            await deleteData('librosDelete', id + "/");
            muestraAlerta('Elminado con éxito', 'success')

        }
    }

    //FUNCIÓN: Agregar los libros al carrito
    const agregarLibro = async(id) =>{ // muestrame la longitud de ID's que son iguales si superan los 10, se muestra la alerta
        muestraAlerta('Agregado al carrito', 'success')
        const librosCarrito = compras.filter(libro => libro === id).length // compras va a tener los libros del local
        if (librosCarrito >= 10) {
            muestraAlerta('La cantidad solicitada no está disponible', 'error')
        } else {
            setCompras([...compras, id]) // agarra el valor anterior, valor a agregar
        }
    }
    
    useEffect(()=>{ // en cada agregar carrito se actualiza el local
        localStorage.setItem('localCompras', JSON.stringify(compras))
    }, [compras])
// useEffect(...): Cada vez que el estado carro cambia (es decir, cuando se agrega o elimina un libro), esta función se ejecuta.
// localStorage.setItem(...): Guarda el estado actualizado del carrito en localStorage bajo la clave carrito, almacenándolo en formato JSON.

    // FUNCIÓN: abrir préstamo (lo tiene el btnPrestamo)
    // cómo así entra a las propiedades de la BD

    const abrirPrestamo = (modalIterar) => {
        setModal(true)
        const {id, usuarioLibro_nombre, titulo, autor, estado, categoria, ubicacion, precio} = modalIterar
        setLibro({id, usuarioLibro_nombre, titulo, autor, estado, categoria, ubicacion, precio})
    }

    // FUNCIÓN: solicitar el prestamo del libro (btn del modal)
    const solicitarPrestamo = () => {
        const infoPrestamo = {
            libros_prestamo: libro.id,
            usuario_prestamo: traerCookie('localUsuarioID'),
            fecha_prestamo_inicio: fechaInicio,
            fecha_prestamo_final: fechaFin
        }
        crearCookie('localPrestamo', JSON.stringify(infoPrestamo), 1)
        localStorage.setItem('localCompras', JSON.stringify([...compras, libro.id]))
        muestraAlerta("Agregado a prestamo con exito","success")
        setModal(false)
    }

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
                        btnEliminar = {() => eliminaLibro(iterar.id)}
                        btnAgregar = {()=> agregarLibro(iterar.id)}
                        btnInfo={()=>btnInfoL(localStorage.setItem('LibrolocalID', iterar.id))}
                        btnEditar = {() => btnEditarL(iterar)}
                        btnPrestamo = {()=> abrirPrestamo(iterar)}
                        // Iterar trae todos los datos 
                    />
                </div>
            ))}
            {/* Modal de prestamo */}
            {modal && (
                <div className="modal-container">
                    <div className="modal-content">
                        <h2>Solicitar préstamo</h2>
                        <h5>Dueño: {libro.usuarioLibro_nombre}</h5>
                        {/* Mi estado libro va a iterar por cada una de las propiedades de la BD */}
                        <p>Libro: {libro.titulo}</p>
                        <p>Autor: {libro.autor}</p>
                        <p>Estado: {libro.estado}</p>
                        <p>Categoría: {libro.categoria}</p>
                        <p>Ubicación: {libro.ubicacion}</p>
                        <p>Precio: {libro.precio ? `₡ ${libro.precio}` : 'Gratis'}</p>
                        <input type="date" value={fechaInicio} onChange={(e)=>setFechaInicio(e.target.value)}/>
                        <input type="date" value={fechaFin} onChange={(e) =>setFechaFin(e.target.value)}/>
                        <button onClick={solicitarPrestamo}>Solicitar préstamo</button>
                        <button onClick={cerrarModal}>Cerrar Modal</button>
                    </div>
                </div>
            )}
        </>
        );
}
export default ListaBooks;