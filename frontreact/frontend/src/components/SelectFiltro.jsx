// eslint-disable-next-line react/prop-types
const SelectFiltro = () => {
    return (
        <>
        <div className="select-filtro">
            <select
                className="form-select form-select-lg mb-3"
                aria-label="Large select example"
            >
                <option selected="">Categorías de la biblioteca</option>
                <option value={'Narrativa'}>Narrativa</option>
                <option value={'Poesía'}>Poesía</option>
                <option value={'Drama'}>Drama</option>
                <option value={'Ensayo'}>Ensayo</option>
                <option value={'No ficción'}>No ficción</option>
                <option value={'Literatura tradicional'}>Literatura tradicional</option>
            </select>
        </div>
        </>

    )
}
export default SelectFiltro