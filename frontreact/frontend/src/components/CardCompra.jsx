import Botton from "./Botton"
import '../styles/CardCompra.css'

// eslint-disable-next-line react/prop-types
const CardCompra = ({ libroCompra, usuarioCompra, autorCompra, estadoCompra, categoriaCompra, precioCompra, btnEliminarCompra, precioTotal, cantidadCompra }) => {

    return (
        <>
            <div className="card" style={{ width: "52vh", margin: '20px', height: '110vh', padding: '8px' }}>
                <p className="text-muted">Usuario: {usuarioCompra}</p>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp"
                    className="card-img-top"
                    alt="Chicago Skyscrapers"
                />
                <div className="card-body">
                    <p>Autor: {autorCompra}</p>
                    <p>Estado: {estadoCompra}</p>
                    <p>Categoría: {categoriaCompra}</p>
                    <p>Precio: {precioCompra ? `₡${precioCompra}` : 'Gratis'}</p>
                </div>

                <div className="precio-carro-total" style={{display:'flex'}}>
                    <div style={{ marginLeft: '-90%', marginTop: '-30%', position: 'absolute' }}>
                        <h5 className="card-title" style={{ fontSize: '15px' }}>Libro: {libroCompra}</h5>
                    </div>
                    <div style={{ marginLeft: '90%', fontSize: '15px', marginTop: '-25%', textAlign: 'center' }}>
                        <p>Cantidad: {cantidadCompra}</p>
                    </div>
                    <div style={{ marginLeft: '30%', marginTop: '-25%' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                            {precioTotal ? `₡ ${precioTotal}` : 'Gratis'} {/*Total de todos los libros */}
                        </span>
                    </div>
                </div>
                <div style={{width:'15%', marginTop:'-10%', padding:'15px', position:'relative', marginLeft:'20%'}}>
                    <Botton nombre={'Agregar al carrito'} tipo={'button'} evento={btnEliminarCompra} clase={'add-to-cart-button'} />
                </div>
            </div>
        </>
    )
}
export default CardCompra