import '../styles/Boton.css'
/* eslint-disable react/prop-types */

const Botton=({nombre, tipo, evento, clase})=>{
    return(
        <>
        <button type={tipo} onClick={evento} className={clase}>{nombre}</button>
        </>
    )
}
export default Botton