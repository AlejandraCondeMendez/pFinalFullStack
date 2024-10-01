import Botton from "./Botton"

const CardBook = () => {

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <h5 className="card-title">Libro: </h5>
                <p className="text-muted">Usuario: </p>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp"
                    className="card-img-top"
                    alt="Chicago Skyscrapers"
                />
                <div className="card-body">
                    <p>Titulo: </p>
                    <p>Autor: </p>
                    <p>Estado: </p>
                    <p>Categoría: </p>
                    <p>Ubicación: </p>
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