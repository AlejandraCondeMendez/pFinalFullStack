const Search = () => {

    return (
        <>
            <div className="input-group rounded search-box">
                <input
                    type="search"
                    className="form-control rounded input-busqueda"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                />
                <span className="input-group-text border-0" id="search-addon" style={{backgroundColor:'#002d85'}}>
                    <i className="fas fa-search text-light" />
                </span>
            </div>

        </>
    )
}
export default Search