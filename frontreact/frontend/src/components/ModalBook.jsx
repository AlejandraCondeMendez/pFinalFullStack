import { useRef, useState } from "react"
import CategoriaBooks from "./CategoriaBooks"
import CheckBooks from "./CheckBooks"
import { muestraAlerta } from "../services/alertas"
import Botton from "./Botton"
import Input from "./Input"
import { postData } from "../services/fetch"
import { traerCookie } from "../services/cookies"


const ModalBook = () => {

    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [estadoVenta, setEstadoVenta] = useState(false)
    const [estadoIntercambio, setIntercabmio] = useState(false)
    const [categoria, setCategoria] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [precio, setPrecio] = useState('')


    const tituloRef = useRef('')
    const autorRef = useRef('')
    const ubicacionRef = useRef('')
    const precioRef = useRef('')

    const validacionModalBook =async ()=>{
        const tituloValidar = tituloRef.current.value.trim()
        const autorValidar = autorRef.current.value.trim()
        const ubiValidar = ubicacionRef.current.value.trim()
        const precioValidar = precioRef.current.value.trim() 

        if (!tituloValidar || !autorValidar || !ubiValidar || !precioValidar || !estadoVenta && !estadoIntercambio) {
            muestraAlerta('Por favor llene los campos vacios', 'error')
        } else{
            const libro = { //las propiedades de la izquierda vienen d la BD
                titulo: tituloValidar,
                autor: autorValidar,
                estado: estadoIntercambio ? "Préstamo" : estadoVenta ? "Venta" : "No hay estado",
                categoria: categoria,
                ubicacion: ubiValidar,
                precio: precioValidar,
                usuarioLibro: traerCookie('localUsuarioID')
            }
            const response = await postData(libro, 'libros/') //'libros/' viene de la base de datos, es la urls.py que a la vez contiene la lógica de la view
            console.log(response);
            setAutor('')
            setCategoria('')
            setEstadoVenta('')
            setIntercabmio('')
            setTitulo('')
            setUbicacion('')
            setPrecio('')
            }

    }
    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
            >
                Agregar libro
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
                                    <Input tipo={'text'} nombre={'Ingrese el titulo'} refvali={tituloRef} valor={titulo} cambio={(e)=>setTitulo(e.target.value)} clase={'form-control'}/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Autor
                                    </label>
                                    <Input tipo={'text'} nombre={'Ingrese el autor'} refvali={autorRef} valor={autor} cambio={(e)=>setAutor(e.target.value)} clase={'form-control'}/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Estado
                                    </label>
                                    <div>
                                        <CheckBooks 
                                        ventaMarcado={estadoVenta} 
                                        interMarcado={estadoIntercambio} 
                                        cambioVenta={(e)=>{setEstadoVenta(e.target.checked); e.target.checked && setIntercabmio(false)}} 
                                        cambioInter={(e)=>{setIntercabmio(e.target.checked); e.target.checked && setEstadoVenta(false)}}/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        <CategoriaBooks valor={categoria} cambio={(e)=>setCategoria(e.target.value)}/>
                                    </label>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Ubicación
                                    </label>
                                    <Input tipo={'text'} nombre={'Ingrese la ubicación'} refvali={ubicacionRef} valor={ubicacion} cambio={(e)=>setUbicacion(e.target.value)} clase={'form-control'}/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Precio
                                    </label>
                                    <Input tipo={'number'} nombre={'Ingrese el precio'} refvali={precioRef} habilitado={!estadoVenta} valor={estadoIntercambio ? 0 : precio} cambio={(e)=>setPrecio(e.target.value)} clase={'form-control'}/>
                                </div>
                                {/* va a estar deshabilitado cuando el estado no sea venta */}

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
                            <Botton tipo={'button'} clase={'btn btn-primary'} nombre={'Guardar'} evento={validacionModalBook}/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default ModalBook