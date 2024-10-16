/* eslint-disable react/prop-types */
import Botton from "./Botton"
import '../styles/Card.css'
import '../styles/BotonCard.css'


const CardBook = ({tituloCard, autorCard, estadoCard, categoriaCard, ubicacionCard, usuarioCard, btnAgregar, btnInfo, btnEliminar, btnEditar, mostrarBoton, mostrarBotonB}) => {

    return (
        <>
            <div className="card " style={{ width: "18rem", padding:'20px',margin:'20px',maxWidth:"18rem",minWidth:"18rem",maxHeight:"100vh",minHeight:"100vh" }}>
                <h5 className="card-title">Libro: {tituloCard}</h5>
                <p className="text-muted">Usuario: {usuarioCard}</p>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp"
                    className="card-img-top"
                    alt="Chicago Skyscrapers"
                />
                <div className="card-body">
                    <p>Autor: {autorCard}</p>
                    <p>Estado: {estadoCard}</p>
                    <p>Categoría: {categoriaCard}</p>
                    <p>Ubicación: {ubicacionCard}</p>
                </div>
                {mostrarBoton && 
                <div className="card-body">
                    <Botton nombre={'Agregar al carrito'} tipo={'button'} evento={btnAgregar} clase={'add-to-cart-button'}/>
                    <Botton nombre={'Más información'} tipo={'button'} evento={btnInfo} clase={'informacion-button'}/>
                </div>
                }
                {mostrarBotonB &&
                <div>
                    <Botton nombre={'Eliminar'} tipo={'button'} evento={btnEliminar} clase={'btn btn-danger'}/>
                    <Botton nombre={'Editar'} tipo={'button'} evento={btnEditar} clase={'btn btn-info'}/> 
                    {/* En card book está la acción.  */}
                </div>
                }
            </div>
        </>
    )
}
export default CardBook