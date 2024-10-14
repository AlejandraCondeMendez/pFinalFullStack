/* eslint-disable react/prop-types */
import { acceptPopUp } from "../services/alertas";
import { deleteData } from "../services/fetch";
import CardBook from "./CardBook";

const ListaBooks = ({ cardBooks, mostrar, mostrarB, btnEditarL }) => {
    const eliminaLibro = async (id) => {
        const alerta = await acceptPopUp("Estás intentando eliminar un libro, ¿Continuar?", "El libro se eliminó con éxito", "La eliminación del libro fue cancelada");
        if (alerta) {
            console.log(id);
            await deleteData('librosDelete', id + "/");
        }
    }
    return (
        <>
            {cardBooks.map((iterar, index) => (
                <div key={index}>
                    <CardBook
                        key={iterar.id}
                        tituloCard={iterar.titulo}
                        autorCard={iterar.autor}
                        estadoCard={iterar.estado}
                        categoriaCard={iterar.categoria}
                        ubicacionCard={iterar.ubicacion}
                        usuarioCard={iterar.usuarioLibro_nombre}
                        mostrarBoton={mostrar}
                        mostrarBotonB={mostrarB}
                        btnEliminar={() => eliminaLibro(iterar.id)}
                        btnEditar={() => btnEditarL(iterar)
                        }
                    />
                </div>
            ))}
        </>
    );
}
export default ListaBooks;