import CardComentario from "./CardComentario"

/* eslint-disable react/prop-types */
const ListaComentarios = ({ comentarLista }) => {
    return (
        <>
            {comentarLista.map((iterar) => (
                <CardComentario
                    key={iterar.id}
                    comentario={iterar.texto_comentario}
                    usuarioComentario={iterar.usuario_comentario}
                    valoracionEstrella={iterar.estrellas_comentario}
                />
            ))}
        </>
    );
}

export default ListaComentarios;
