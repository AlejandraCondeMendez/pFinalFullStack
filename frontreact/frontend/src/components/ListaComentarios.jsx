import CardComentario from "./CardComentario"

/* eslint-disable react/prop-types */
const ListaComentarios = ({ comentarLista, habilitadosLista }) => {
    return (
        <>

        {comentarLista.length === 0 && <p>No hay comentarios</p>}
            {comentarLista.map((iterar) => (
                <CardComentario
                    key={iterar.id}
                    comentario={iterar.texto_comentario}
                    usuarioComentario={iterar.usuario_comenta}
                    valoracionEstrella={iterar.estrellas_comentario}
                    habilitados={habilitadosLista}
                />
            ))}
        </>
    );
}

export default ListaComentarios;
