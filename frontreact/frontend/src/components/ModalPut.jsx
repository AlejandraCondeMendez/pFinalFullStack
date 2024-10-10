/* eslint-disable react/prop-types */
import Botton from "./Botton"
import Input from "./Input"
import CheckBooks from "./CheckBooks"
import CategoriaBooks from "./CategoriaBooks"
import { useRef, useState } from "react"
import { useEffect } from "react"
import { muestraAlerta } from "../services/alertas"

const ModalPut=({tituloProp, autorProp, ventaProp, interProp, categoriaProp, ubicaProp, btnEditarProp})=>{
    const [titulop, setTitulop] = useState(tituloProp)
    const [autorp, setAutorp] = useState(autorProp)
    const [estadoVentap, setEstadoVentap] = useState(ventaProp)
    const [estadoInterp, setEstadoInterp] = useState(interProp)
    const [categoriap, setCategoriap] = useState(categoriaProp)
    const [ubicacionp, setUbicacionp] = useState(ubicaProp)

    const tituloR = useRef('')
    const autorR = useRef('')
    const ubicacionR = useRef('')
//Este useEffect nos sirve para que se carguen los datos que ya se encontraban 
// en la card y editar solo los datos que queramos
    useEffect(()=>{
        setTitulop(tituloProp)
        setAutorp(autorProp)
        setEstadoVentap(ventaProp)
        setEstadoInterp(interProp)
        setCategoriap(categoriaProp)
        setUbicacionp(ubicaProp)
    }, [tituloProp, autorProp, ventaProp, interProp, categoriaProp, ubicaProp])

    const validarInputs=()=>{
        const tituloModal = tituloR.current.value.trim()
        const autorModal = autorR.current.value.trim()
        const ubicaModal = ubicacionR.current.value.trim()
        if (!tituloModal || !autorModal || !ubicaModal) {
            muestraAlerta('Llenas los espacios vacios', 'error')
        } else{
            btnEditarProp(titulop, autorp, estadoVentap, estadoInterp, categoriap, ubicacionp)
        }
    }

    return(
        <>
          <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
            >
                Editar libro
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Libro nuevo
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Titulo
                                    </label>
                                    <Input tipo={'text'} nombre={'Ingrese el titulo'} valor={titulop} cambio={(e)=>setTitulop(e.target.value)}/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Autor
                                    </label>
                                    <Input tipo={'text'} nombre={'Ingrese el autor'} valor={autorp} cambio={(e)=>setAutorp(e.target.value)}/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Estado
                                    </label>
                                    <div>
                                        <CheckBooks ventaMarcado={estadoVentap} interMarcado={estadoInterp} cambioInter={(e)=>setEstadoInterp(e.target.value)} cambioVenta={(e)=>setEstadoVentap(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        <CategoriaBooks valor={categoriap} cambio={(e)=>setCategoriap(e.target.value)}/>
                                    </label>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Ubicación
                                    </label>
                                    <Input tipo={'text'} nombre={'Ingrese la ubicación'} valor={ubicacionp} cambio={(e)=>setUbicacionp(e.target.value)}/>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                            <Botton tipo={'button'} nombre={'Guardar cambios'} evento={validarInputs}/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ModalPut