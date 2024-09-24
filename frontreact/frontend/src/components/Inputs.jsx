// eslint-disable-next-line react/prop-types
const Inputs=({tipo, nombre, refvali, cambio, valor, clase})=>{
    return (
        <>
        <input type={tipo} placeholder={nombre} ref={refvali} onChange={cambio} value={valor} className={clase}/>
        </>
    )
}
export default Inputs