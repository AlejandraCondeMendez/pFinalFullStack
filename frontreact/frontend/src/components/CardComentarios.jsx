import ReactStars from "react-rating-stars-component";
import '../styles/CardResenia.css'
import Botton from "./Botton";
import Input from './Input'
import '../styles/CardComentarios.css'

const CardComentarios = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

 
    return (
        <>
            <div className="comment-box" style={{padding:'2%', marginTop:'2%'}}>
                <i className="fa-solid fa-user estilos-iconos-registro"></i>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
                <div style={{marginTop:'2%', marginLeft:'12%'}}>
                    <Input tipo={'text'} clase={'input-comentario'}/>
                </div>

                <div style={{marginTop:'3%', textAlign:'right'}}>
                    <Botton nombre={'Añadir comentario'}/>
                </div>
                
            </div>
        </>
    )
}
export default CardComentarios