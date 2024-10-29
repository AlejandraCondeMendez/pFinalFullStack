import { useState } from "react";

const ModalPrestamo = ()=>{
    const [modalPrestamo, setModalPrestamo] = useState(false);
    const [libro, setLibro] = useState({});
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');
    
    
    const abrirPrestamo = (libro) => {
        setModalPrestamo(true);
        const {id, titulo, autor, estado, categoria, ubicacion, precio} = libro;
        setLibro({id, titulo, autor, estado, categoria, ubicacion, precio});
    }

    const solicitarPrestamo =  () => {
        const prestamo = {
            libro: libro.id,
            fecha_prestamo: fechaInicio,
            fecha_fin: fechaFinal,
            solicitante: traerCookie('localUsuarioID')
        }

        crearCookie('prestamo', JSON.stringify(prestamo));
        localStorage.setItem('localCompras',JSON.stringify([...compras, libro.id]));
        console.log(prestamo);
    }
    

    return(
        <>
        {modalPrestamo && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Solicitud de préstamo</h3>
                        <p>Libro: {libro.titulo}</p>
                        <p>Autor: {libro.autor}</p>
                        <p>Estado: {libro.estado}</p>
                        <p>Categoría: {libro.categoria}</p>
                        <p>Ubicación: {libro.ubicacion}</p>
                        <p>Precio: {libro.precio ? `₡ ${libro.precio}` : 'Gratis'}</p>
                        <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
                        <input type="date" value={fechaFinal} onChange={(e) => setFechaFinal(e.target.value)} />
                        <button onClick={solicitarPrestamo}>Solicitar préstamo</button>

                        <button onClick={closeModal}>Cerrar Modal</button>
                    </div>
                </div>
            )}
        </>
        
)}
export default ModalPrestamo