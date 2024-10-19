import ReactStars from "react-rating-stars-component";
import '../styles/CardResenia.css'

const CardResenia = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };


    return (
        <>
            <div className="comment-box">
                <i className="fa-solid fa-user estilos-iconos-registro"></i>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
            </div>
        </>
    )
}
export default CardResenia