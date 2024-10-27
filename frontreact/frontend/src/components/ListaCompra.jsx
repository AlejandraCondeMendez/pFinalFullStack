/* eslint-disable react/prop-types */
import CardCompra from "./CardCompra"

// eslint-disable-next-line react/prop-types
const ListaCompra = ({compraCard}) => {

    const eliminarCompra = (id) => {
        const localID = JSON.parse(localStorage.getItem('localCompras') || '[]')
        const buscarID = localID.indexOf(id) // buscar la posición del ID
        if (buscarID !== -1) {
            localID.splice(buscarID, 1) // entramos al array, eliminamos la posición según el ID e indicamos la cantidad a eliminar
            localStorage.setItem('localCompras', JSON.stringify(localID))
        }
    }

    return (
        <>
        {compraCard.map((compras)=>{
            return(
                <CardCompra
                key={compras.id}
                libroCompra={compras.titulo}
                autorCompra={compras.autor}
                usuarioCompra={compras.usuarioLibro_nombre}
                categoriaCompra={compras.categoria}
                estadoCompra={compras.estado}
                precioCompra={compras.precio}
                cantidadCompra={compras.cantidadLibros}
                precioTotal={compras.precioTotalLibros}
                btnEliminarCompra={()=>eliminarCompra(compras.id)}
                />
            )
        })}
        </>
    )
}
export default ListaCompra