/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { getBarraBusqueda } from "../services/fetch";

const BusquedaContext = createContext()

export const BusquedaProvider = ({children}) => {
    const [barraBusqueda, setBarraBusqueda] = useState('')
    const [librosBuscados, setLibrosBuscados] = useState([])
    
    const BuscarLibros = async (buscar) => {
        setBarraBusqueda(buscar)
        if (buscar.trim() === '') {
            setLibrosBuscados([])
            return
        }
        const libroBuscado = await getBarraBusqueda(buscar)
        setLibrosBuscados(libroBuscado)
    }
    return(
    <BusquedaContext.Provider value={{barraBusqueda, setBarraBusqueda, librosBuscados, BuscarLibros}}>
        {children}
    </BusquedaContext.Provider>
    )
}

export const useSearch = () => useContext(BusquedaContext)