/* eslint-disable react/prop-types */
import CardBook from "./CardBook"
const ListaBooks=({cardBooks})=>{
    

    return(
        <> 
        {cardBooks.map((iterar, index)=>(
            <div key={index}>
                <CardBook
                key={iterar.id}
                tituloCard={iterar.titulo}
                autorCard={iterar.autor}
                estadoCard={iterar.estado}
                categoriaCard={iterar.categoria}
                ubicacionCard={iterar.ubicacion}
                usuarioCard={iterar.usuarioLibro}
                />
            </div>
        ))}
        </>
    )
}
export default ListaBooks