/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import CardBook from './CardBook';
import { deleteData } from '../services/fetch';
import { acceptPopUp } from '../services/alertas';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarruselLibro=({cardLibro, mostrar, mostrarB, btnEditarL, btnInfoL})=>{

    const eliminaLibro = async (id) => {
        const alerta = await acceptPopUp("Estás intentando eliminar un libro, ¿Continuar?", "El libro se eliminó con éxito", "La eliminación del libro fue cancelada");
        if (alerta) {
            console.log(id);
            await deleteData('librosDelete', id + "/");
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5, // número de cards que se mostrarán a la vez
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return(
        <>
        <Slider {...settings}>
            {cardLibro.map((iterar)=>(
                <CardBook
                key={iterar.id}
                tituloCard={iterar.titulo}
                autorCard={iterar.autor}
                estadoCard={iterar.estado}
                categoriaCard={iterar.categoria}
                ubicacionCard={iterar.ubicacion}
                usuarioCard={iterar.usuarioLibro_nombre}
                mostrarBoton={mostrar} //agregar e ingo
                mostrarBotonB={mostrarB} // eliminar y editar
                btnInfo={()=>btnInfoL(localStorage.setItem('LibrolocalID', iterar.id))}
                btnEliminar={() => eliminaLibro(iterar.id)}
                btnEditar={() => btnEditarL(iterar)} // En lista books está la función
                        // Iterar trae todos los datos 
                />
            ))}
        </Slider>
        </>
    )
}
export default CarruselLibro