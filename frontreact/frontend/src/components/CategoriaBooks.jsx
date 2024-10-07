// eslint-disable-next-line no-unused-vars, react/prop-types
const CategoriaBooks = ({valor='Categoría', cambio}) => {
    return (
        <>
            <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                value={valor}
                onChange={cambio}
            >
                <option selected="">Categoría</option>
                <option value={'Narrativa'}>Narrativa</option>
                <option value={'Poesía'}>Poesía</option>
                <option value={'Drama'}>Drama</option>
                <option value={'Ensayo'}>Ensayo</option>
                <option value={'No ficción'}>No ficción</option>
                <option value={'Literatura tradicional'}>Literatura tradicional</option>

            </select>

        </>
    )
}
export default CategoriaBooks