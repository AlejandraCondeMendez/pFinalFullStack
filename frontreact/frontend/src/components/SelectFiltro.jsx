const SelectFiltro = () => {
    return (
        <>
        <div className="select-filtro">
            <select
                className="form-select form-select-lg mb-3"
                aria-label="Large select example"
            >
                <option selected="">Open this select menu</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
            </select>
        </div>
        </>

    )
}
export default SelectFiltro