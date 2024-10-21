/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import CardBook from './CardBook';
import { deleteData } from '../services/fetch';
import { acceptPopUp } from '../services/alertas';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Componente para la flecha izquierda
const LeftArrow = ({ onClick }) => (
    <button className="slick-prev custom-arrow" onClick={onClick}>
        &#9664; {/* Puedes reemplazar esto con un ícono o imagen */}
    </button>
);

// Componente para la flecha derecha
const RightArrow = ({ onClick }) => (
    <button className="slick-next custom-arrow" onClick={onClick}>
        &#9654; {/* Puedes reemplazar esto con un ícono o imagen */}
    </button>
);

const CarruselLibro = ({ cardLibro, mostrar, mostrarB, btnEditarL, btnInfoL }) => {

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
        slidesToShow: 3.5,
        slidesToScroll: 1,
        arrows: true, // Habilitar flechas
        prevArrow: <LeftArrow />, // Usar el componente de flecha izquierda
        nextArrow: <RightArrow />, // Usar el componente de flecha derecha
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

    return (
        <>
            <Slider {...settings}>
                {cardLibro.map((iterar) => (
                    <CardBook
                        key={iterar.id}
                        tituloCard={iterar.titulo}
                        autorCard={iterar.autor}
                        estadoCard={iterar.estado}
                        categoriaCard={iterar.categoria}
                        ubicacionCard={iterar.ubicacion}
                        usuarioCard={iterar.usuarioLibro_nombre}
                        precioCard={iterar.precio}
                        mostrarBoton={mostrar}
                        mostrarBotonB={mostrarB}
                        btnInfo={() => btnInfoL(localStorage.setItem('LibrolocalID', iterar.id))}
                        btnEliminar={() => eliminaLibro(iterar.id)}
                        btnEditar={() => btnEditarL(iterar)}
                    />
                ))}
            </Slider>
        </>
    );
}

export default CarruselLibro;
