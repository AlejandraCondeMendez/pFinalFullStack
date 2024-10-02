// eslint-disable-next-line no-unused-vars, react/prop-types
const CategoriaBooks = ({categoriaSeleccionada='Categoría', manejoCategoriaProp}) => {
    return (
        <>
            <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                value={categoriaSeleccionada}
                onChange={manejoCategoriaProp}
            >
                <option selected="">Categoría</option>
                <option value={'Narrativa'}>Narrativa</option>
                <option value={'Posia'}>Poesía</option>
                <option value={'Drama'}>Drama</option>
                <option value={'Ensayo'}>Ensayo</option>
                <option value={'No ficción'}>No ficción</option>
                <option value={'Literatura tradicional'}>Literatura tradicional</option>

            </select>

        </>
    )
}
export default CategoriaBooks