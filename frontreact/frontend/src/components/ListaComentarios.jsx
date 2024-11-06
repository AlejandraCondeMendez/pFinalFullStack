import CardComentario from "./CardComentario"

/* eslint-disable react/prop-types */
const ListaComentarios = ({ comentarLista, habilitadosLista }) => {
    return (
        <>

        {comentarLista.length === 0 && <h4 style={{textAlign:'center', justifyContent:'center'}}>No hay comentarios</h4>}
            {comentarLista.map((iterar) => (
                <CardComentario
                    key={iterar.id}
                    comentario={iterar.texto_comentario} // BD
                    usuarioComentario={iterar.usuario_comenta} // BD 
                    valoracionEstrella={iterar.estrellas_comentario} // BD
                    habilitados={habilitadosLista}
                />
            ))}
        </>
    );
}

export default ListaComentarios;
