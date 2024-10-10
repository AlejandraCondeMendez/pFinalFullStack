/* eslint-disable react/prop-types */
import Botton from "./Botton"
import Input from "./Input"
import CheckBooks from "./CheckBooks"
import CategoriaBooks from "./CategoriaBooks"
import { useRef, useState } from "react"
import { useEffect } from "react"
import { muestraAlerta } from "../services/alertas"
import { Modal } from "react-bootstrap"

const ModalPut = ({ mostrar,ocultar,id, tituloProp, autorProp, ventaProp, interProp, categoriaProp, ubicaProp, btnEditarProp }) => {
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
    useEffect(() => {
        setTitulop(tituloProp)
        setAutorp(autorProp)
        setEstadoVentap(ventaProp)
        setEstadoInterp(interProp)
        setCategoriap(categoriaProp)
        setUbicacionp(ubicaProp)
    }, [tituloProp, autorProp, ventaProp, interProp, categoriaProp, ubicaProp])

    const validarInputs = () => {
        const tituloModal = tituloR.current.value.trim()
        const autorModal = autorR.current.value.trim()
        const ubicaModal = ubicacionR.current.value.trim()
        if (!tituloModal || !autorModal || !ubicaModal) {
            muestraAlerta('Llenas los espacios vacios', 'error')
        } else {
            btnEditarProp(id,titulop, autorp, estadoVentap, estadoInterp, categoriap, ubicacionp)
            ocultar()
        }
    }

    return (
        <>
            <Modal show={mostrar} onHide={ocultar} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">My books</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Books information</h4>
                    <div className='d-flex flex-column mx-auto justify-content-center align-items-center'>
                        {/* Title input */}
                        <Input
                            tipo={"text"}
                            nombre={"Titulo"}
                            clase={"w-25 mb-3 p-1"}
                            refVali={tituloR}
                            valor={tituloProp}
                            cambio={(e) => setTitulop(e.target.value)}
                        />

                        {/* Author input */}
                        <Input
                            tipo={"text"}
                            nombre={"Autor"}
                            clase={"w-25 mb-3 p-1"}
                            valor={autorp}
                            cambio={(e) => setAutorp(e.target.value)}
                        />

                        {/* Estado input */}
                    

                        {/* Opciones input */}

                        {/* Ubicación input */}
                        <Input
                            tipo={"text"}
                            nombre={"Ubicación"}
                            valor={ubicacionp}
                            cambio={(e) => setUbicacionp(e.target.value)}
                            clase={"w-25 mb-3 p-1"}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Botton nombre={"Subir cambios"} evento={validarInputs}>Editar información</Botton>
                </Modal.Footer>
            </Modal>


        </>
    )
}
export default ModalPut