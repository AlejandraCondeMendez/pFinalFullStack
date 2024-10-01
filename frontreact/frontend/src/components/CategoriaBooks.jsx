const CategoriaBooks = () => {
    return (
        <>
            <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
            >
                <option selected="">Categoría</option>
                <option value={1}>Narrativa</option>
                <option value={2}>Poesía</option>
                <option value={4}>Drama</option>
                <option value={3}>Ensayo</option>
                <option value={5}>No ficción</option>
                <option value={6}>Literatura tradicional</option>

            </select>

        </>
    )
}
export default CategoriaBooks