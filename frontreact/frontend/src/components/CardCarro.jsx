import Botton from "./Botton"
// eslint-disable-next-line react/prop-types
const CardCarro = ({tituloCard, usuarioCard, autorCard, estadoCard, categoriaCard, ubicacionCard, precioCard, precioLibro, cantidadCard, btnEliminar})=>{
    return(
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
                    <p>Cantidad: {cantidadCard}</p>
                    <p>Precio: {precioLibro}</p>
                    <p>Precio total: {precioCard ? `₡ ${precioCard}`: 'Gratis'}</p>
                    
                </div>
                <Botton nombre={'Eliminar'} tipo={'button'} evento={btnEliminar} clase={'add-to-cart-button'}/>               
            </div>

        </>
    )
}
export default CardCarro