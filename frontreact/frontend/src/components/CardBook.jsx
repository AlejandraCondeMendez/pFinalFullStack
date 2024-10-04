/* eslint-disable react/prop-types */
import Botton from "./Botton"

const CardBook = ({tituloCard, autorCard, estadoCard, categoriaCard, ubicacionCard, usuarioCard}) => {

    return (
        <>
            <div className="card " style={{ width: "18rem", padding:'20px',margin:'20px'}}>
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
                <div className="card-body">
                    <Botton nombre={'Agregar al carrito'}/>
                    <Botton nombre={'Más información'}/>
                </div>
            </div>
        </>
    )
}
export default CardBook