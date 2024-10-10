/* eslint-disable react/prop-types */
import { acceptPopUp } from "../services/alertas"
import { deleteData } from "../services/fetch"
import CardBook from "./CardBook"
//ListaBooks nos conecta con la base de datos, itera sobre cada propiedad

const ListaBooks=({cardBooks, mostrar, mostrarB,btnEditarL})=>{
    //función para eliminar el libro según el ID
    const eliminaLibro=async(id)=>{
            const alerta = await acceptPopUp("Estás intentando eliminar un libro, ¿Continuar?", "El libro se eliminó con éxito", "La eliminación del libro fue cancelada")
            if (alerta){
                console.log(id);
                await deleteData('librosDelete', id+"/")
            }
        }
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
                usuarioCard={iterar.usuarioLibro_nombre}
                mostrarBoton={mostrar}
                mostrarBotonB={mostrarB}
                btnEliminar={()=>eliminaLibro(iterar.id)}
                btnEditar={()=> //btnEditar:
                    btnEditarL( //agarra todos los valores de la API
                        iterar.id,
                        iterar.titulo,
                        iterar.autor,
                    )
                }
                />
            </div>
        ))}

        </>
    )
}
export default ListaBooks