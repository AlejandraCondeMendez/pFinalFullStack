/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { acceptPopUp, muestraAlerta } from "../services/alertas";
import { deleteData } from "../services/fetch";
import CardBook from "./CardBook";

// JSON.stringfy (objeto js en una cadena de texto en formato JSON.)
// JSON.parse (formato JSON a un objeto js)

const ListaBooks = ({ cardBooks, mostrar, mostrarB, btnEditarL, btnInfoL}) => {
    
    const localStorageLibro = localStorage.getItem('localCompras') // obtener los ID de los libros  
    const [compras, setCompras] = useState(localStorageLibro ? JSON.parse(localStorageLibro) : []) // si el local no tiene datos va a iniciar en un array vacío
  
    const [modalPrestamo, setModalPrestamo] = useState(false);
    const [libro, setLibro] = useState({});
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');
    
    const abrirPrestamo = (libroIterar) => {
          setModalPrestamo(true);
          const {id, titulo, autor, estado, categoria, ubicacion, precio} = libroIterar // TOMO POR SEPARADO CADA UNA DE LAS PROPS DEL LIBRO. Para luego pasarselas al estado
          setLibro({id, titulo, autor, estado, categoria, ubicacion, precio})
      }
    
      const solicitarPrestamo =  () => {
          const prestamo = {
              libro: libro.id,
              fecha_prestamo: fechaInicio,
              fecha_fin: fechaFinal,
              solicitante: traerCookie('localUsuarioID')
          }
          crearCookie('prestamo', JSON.stringify(prestamo))
          localStorage.setItem('localCompras',JSON.stringify([...compras, libro.id]));
          console.log(prestamo);
      }
    //Elimina el libro según su ID
    const eliminaLibro = async (id) => {
        const alerta = await acceptPopUp("Estás intentando eliminar un libro, ¿Continuar?", "El libro se eliminó con éxito", "La eliminación del libro fue cancelada");
        if (alerta) {
            console.log(id);
            await deleteData('librosDelete', id + "/");
        }
    }

    //Agregar los libros al carrito
    const agregarLibro = async(id) =>{ // muestrame la longitud de ID's que son iguales si superan los 10, se muestra la alerta
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
                        btnAgregar = {()=> agregarLibro(iterar.id)}
                        btnPrestamo = {()=>abrirPrestamo(iterar)}
                        // Iterar trae todos los datos 
                    />
                </div>
            ))}
                {modalPrestamo && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Solicitar préstamo</h3>
                        <p>Libro: {libro.titulo}</p>
                        <p>Autor: {libro.autor}</p>
                        <p>Estado: {libro.estado}</p>
                        <p>Categoría: {libro.categoria}</p>
                        <p>Ubicación: {libro.ubicacion}</p>
                        <p>Precio: {libro.precio ? `₡ ${libro.precio}` : 'Gratis'}</p>
                        <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
                        <input type="date" value={fechaFinal} onChange={(e) => setFechaFinal(e.target.value)} />
                        <button onClick={solicitarPrestamo}>Solicitar préstamo</button>

                        <button onClick={""}>Cerrar Modal</button>
                    </div>
                </div>
            )}
        </>
    );

}
export default ListaBooks;









