/* eslint-disable react/prop-types */
import Botton from "./Botton"
import '../styles/Card.css'
import '../styles/BotonCard.css'
import { traerCookie } from "../services/cookies"

// Cuerpo del card, las propiedades que va a tener el libro
const CardBook = ({tituloCard, autorCard, estadoCard, categoriaCard, ubicacionCard, precioCard, usuarioCard, btnAgregar, btnInfo, btnEliminar, btnEditar, btnPrestamo, mostrarBoton, mostrarBotonB}) => {

    return (
        <>
            <div className="card" style={{ width: "52vh", margin:'20px', height:'110vh', padding:'8px'}}>
                <h5 className="card-title">Libro: {tituloCard}</h5>
                <p className="text-muted">Usuario: {usuarioCard}</p>
                <i style={{fontSize:'170px', textAlign:'center'}} className="fa-solid fa-book"></i>
                <div className="card-body" style={{marginTop:'5%'}}>
                    <p>Autor: {autorCard}</p>
                    <p>Estado: {estadoCard}</p>
                    <p>Categoría: {categoriaCard}</p>
                    <p>Ubicación: {ubicacionCard}</p>
                    <p>Precio: {precioCard ? `₡ ${precioCard}`: 'Gratis'}</p> 

                </div>
                {mostrarBoton &&  precioCard > 0 && traerCookie("localUsuarioID") &&
                <div className="card-body" style={{position:'relative', marginTop:'-40px', textAlign:'center', justifyContent:'center'}}>
                    <div style={{marginBottom:'5px'}}>
                    </div>
                    <div className="d-flex gap-3 flex-column">
                        <Botton nombre={'Agregar al carrito'} tipo={'button'} evento={btnAgregar} clase={'add-to-cart-button'} />
                        <Botton nombre={'Más información'} tipo={'button'} evento={btnInfo} clase={'informacion-button'}/>
                    
                    </div>

                </div>
                }
                {precioCard === 0 && !mostrarBotonB &&   traerCookie("localUsuarioID") &&
                <div className="card-body" style={{position:'relative', marginTop:'-40px', textAlign:'center', justifyContent:'center'}}>
                    <div className="d-flex gap-3 flex-column">
                        <Botton nombre={'Solicitar préstamo'} tipo={'button'} evento={btnPrestamo} clase={'btn btn-primary'}/>
                        <Botton nombre={'Más información'} tipo={'button'} evento={btnInfo} clase={'informacion-button'}/>
                    </div>
                </div>
                }
                {precioCard === 0 && mostrarBotonB &&
                <div  style={{display:'grid', gap:'10px'}}>
                    <div>
                        <Botton nombre={'Eliminar'} tipo={'button'} evento={btnEliminar} clase={'btn btn-danger w-50'}/>
                    </div>
                    <div style={{marginLeft:'30px', position:'relative'}}>
                        <Botton nombre={'Editar'} tipo={'button'} evento={btnEditar} clase={'btn btn-info w-50'}/> 
                    </div>
                    {/* En card book está la acción.  */}
                </div>
                }
                {mostrarBotonB && precioCard > 0 &&
                <div  style={{display:'grid', gap:'10px'}}>
                    <div className="d-flex flex-column gap-3">
                        <Botton nombre={'Eliminar'} tipo={'button'} evento={btnEliminar} clase={'btn btn-danger w-50'}/>
                        <Botton nombre={'Editar'} tipo={'button'} evento={btnEditar} clase={'btn btn-info w-50'}/> 
                    </div>
                    {/* En card book está la acción.  */}
                </div>
                }
            </div>
        </>
    )
}
export default CardBook