/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";
import '../styles/CardResenia.css'
import Botton from "./Botton";
import Input from './Input'
import '../styles/CardComentarios.css'
import { useState } from "react";
import { traerCookie } from "../services/cookies";
import { postData } from "../services/fetch";

// ¿qué propiedades tiene comentario?
const CardComentario = ({comentario, usuarioComentario, valoracionEstrella = 0,habilitados}) => {
    //cada que haya un cambio usamos el useState, en este caso comentario y valoración de cada usuario
    const [estadoComentario, setEstadoComentario] = useState('')
    const [estadoValoracion, setEstadoValoracion] = useState(0)

// se necesita que el comentario se agregue desde el frontend al backend, usaré un post
    const postComentario = async () =>{
        const objetoComentario = {
            estrellas_comentario: estadoValoracion,
            texto_comentario: estadoComentario,
            libro_comentario: localStorage.getItem('LibrolocalID'),
            usuario_comentario: traerCookie('localUsuarioID')
        }
        await postData(objetoComentario, 'libros/comentarios')
    }

    const cambioValoracion = (nuevoRating)=>{
        setEstadoValoracion(nuevoRating)        
    }
    
    return (
        <>
            <div className="comment-box">
                <p>{usuarioComentario}</p>
                <i className="fa-solid fa-user estilos-iconos-registro"></i>
                <ReactStars
                    count={5}
                    onChange={cambioValoracion}
                    size={24}
                    value={valoracionEstrella}
                    activeColor="#ffd700"
                    edit={habilitados}
                />
                <div style={{marginTop:'2%', marginLeft:'12%'}}>
                    <Input tipo={'text'} clase={'input-comentario'} habilitado={!habilitados} valor={comentario} cambio={(e)=>setEstadoComentario(e.target.value)}/>
                </div>
                {habilitados &&
                <div style={{marginTop:'3%', textAlign:'right'}}>
                    <Botton nombre={'Añadir comentario'} evento={postComentario}/>
                </div>
                }
            </div>
        </>
    )
}
export default CardComentario