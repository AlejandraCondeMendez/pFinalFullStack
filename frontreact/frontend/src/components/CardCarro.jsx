import Botton from "./Botton"
import '../styles/CardCarro.css'
// eslint-disable-next-line react/prop-types
const CardCarro = ({ tituloCard, usuarioCard, autorCard, estadoCard, categoriaCard, ubicacionCard, precioCard, precioLibro, cantidadCard, btnEliminar }) => {
    return (
        <>
            <div className="card" style={{ width: "22%", height: '15%', padding:'8px'}}>
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
                    <p>Precio: {`₡ ${precioLibro}`}</p>
                </div>

                <div className="precio-carro-total" style={{display:'flex'}}> {/*Precio total de los libros agregados al carrito*/}
                    <div style={{marginLeft:'-90%', marginTop:'-30%', position:'absolute'}}>
                        <h5 className="card-title" style={{fontSize:'15px'}}>Libro:<br/>{tituloCard}</h5>
                    </div>
                    <div style={{marginLeft:'90%', fontSize:'15px', marginTop:'-25%', textAlign:'center'}}>
                        <p>Cantidad: {cantidadCard}</p>
                    </div>
                    <div style={{ marginLeft: '30%', marginTop: '-25%' }}>
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        {precioCard ? `₡ ${precioCard}` : 'Gratis'}
    </span>
</div>

                </div>

                <div style={{width:'15%', marginTop:'-10%', padding:'15px', position:'relative', marginLeft:'20%'}}>
                    <Botton nombre={'Eliminar'} tipo={'button'} evento={btnEliminar} clase={'add-to-cart-button'}/>
                </div>
            </div>

        </>
    )
}
export default CardCarro