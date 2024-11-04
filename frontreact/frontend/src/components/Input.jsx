// eslint-disable-next-line react/prop-types
const Input=({tipo, nombre, refvali, cambio, valor, clase, longitud, habilitado})=>{
    return (
        <>
        <input type={tipo} placeholder={nombre} ref={refvali} onChange={cambio} maxLength={longitud} value={valor} className={clase} disabled={habilitado}/>
        </>
    )
}
export default Input