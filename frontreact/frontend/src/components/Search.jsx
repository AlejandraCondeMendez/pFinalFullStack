import { useSearch } from "./BusquedaContext"
const Search = () => {

    const {barraBuqueda, setBarraBusqueda, BuscarLibros} = useSearch()
    const libroBuscar = (e) => {
        const contenido = e.target.value
        setBarraBusqueda(contenido)
        BuscarLibros(contenido)
    }
    return (
        <>
            <div className="input-group rounded search-box" style={{width:'50%', marginTop:'5%', marginLeft:'25%'}}>
                <input
                    type="search"
                    className="form-control rounded input-busqueda"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    value={barraBuqueda}
                    onChange={libroBuscar}
                />
                <span className="input-group-text border-0" id="search-addon" style={{backgroundColor:'#002d85'}}>
                    <i className="lupita-busqueda fas fa-search text-light"/>
                </span>
            </div>

        </>
    )
}
export default Search