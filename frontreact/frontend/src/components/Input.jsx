// eslint-disable-next-line react/prop-types
const Input=({tipo, nombre, refvali, cambio, valor, clase, longitud})=>{
    return (
        <>
        <input type={tipo} placeholder={nombre} ref={refvali} onChange={cambio} maxLength={longitud} value={valor} className={clase}/>
        </>
    )
}
export default Input