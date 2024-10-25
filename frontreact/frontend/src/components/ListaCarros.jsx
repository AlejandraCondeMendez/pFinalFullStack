/* eslint-disable react/prop-types */
import CardCarro from "./CardCarro"
const ListaCarros = ({cardCarro})=>{

    const eliminarCard = (id)=>{
        const librosLocalID = JSON.parse(localStorage.getItem('carrito') || '[]')
        const buscarID = librosLocalID.indexOf(id) // busar la posición del ID
        if (buscarID !== -1) { //la posición sí esta dentro del arreglo
            librosLocalID.splice(buscarID, 1) // desde la posición encontrada, cantidad a quitar
            localStorage.setItem('carrito', JSON.stringify(librosLocalID))
        }
    }

    return(
        <>
        <h3>Hay {cardCarro.length} producto(s) en tu carrito</h3>
        {cardCarro.map((iterar, index)=>{
                return(
            <div key={index}>
                <CardCarro
                key={iterar.id}
                tituloCard={iterar.titulo}
                usuarioCard={iterar.usuarioLibro_nombre}
                autorCard={iterar.autor}
                estadoCard={iterar.estado}
                categoriaCard={iterar.categoria}
                ubicacionCard={iterar.ubicacion}
                precioLibro={iterar.precio}   //pagCarro
                precioCard={iterar.precioCard} //pagCarro
                cantidadCard={iterar.cantidad} //pagCarro
                btnEliminar={()=>eliminarCard(iterar.id)}             

                />
            </div>)
        })}

        </>
    )
}
export default ListaCarros