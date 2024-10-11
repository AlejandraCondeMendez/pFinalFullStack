/* eslint-disable react/prop-types */
import Input from "./Input"
import CheckBooks from "./CheckBooks"
import CategoriaBooks from "./CategoriaBooks"
import { useRef, useState } from "react"
import { useEffect } from "react"
import { muestraAlerta } from "../services/alertas"
import { Button, Modal } from "react-bootstrap"

const ModalPut = ({ mostrar, ocultar, id, tituloProp, autorProp, ventaProp, interProp, categoriaProp, ubicaProp, btnEditarProp }) => {
    const [titulop, setTitulop] = useState(tituloProp)
    const [autorp, setAutorp] = useState(autorProp)
    const [estadoVentap, setEstadoVentap] = useState(ventaProp === 'Venta') //venta viene de la base de datos
    const [estadoInterp, setEstadoInterp] = useState(interProp === 'Intercambio') //inter viene de la base de datos
    const [categoriap, setCategoriap] = useState(categoriaProp || 'Categoria')
    const [ubicacionp, setUbicacionp] = useState(ubicaProp)
    const tituloR = useRef('')
    const autorR = useRef('')
    const ubicacionR = useRef('')
    //Este useEffect nos sirve para que se carguen los datos que ya se encontraban 
    // en la card y editar solo los datos que queramos
    useEffect(() => {
        setTitulop(tituloProp)
        setAutorp(autorProp)
        setEstadoVentap(ventaProp === 'Venta')
        setEstadoInterp(interProp === 'Intercambio')
        setCategoriap(categoriaProp)
        setUbicacionp(ubicaProp)
    }, [tituloProp, autorProp, ventaProp, interProp, categoriaProp, ubicaProp])

    const validarInputs = () => {
        const tituloModal = tituloR.current.value.trim()
        const autorModal = autorR.current.value.trim()
        const ubicaModal = ubicacionR.current.value.trim()
        if (!tituloModal || !autorModal || !ubicaModal) {
            muestraAlerta('Llenar los espacios vacios', 'error')
        } else {
            btnEditarProp(id,titulop, autorp, estadoVentap, estadoInterp, categoriap, ubicacionp)
            ocultar()
        }
    }

    return (
        <>
        {/* Button to open the modal */}
        {/* Modal component */}
        <Modal show={mostrar} onHide={ocultar} centered>
          <Modal.Header closeButton>
            <Modal.Title>Libro nuevo</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="titulo" className="col-form-label">
                  Titulo
                </label>
                <Input
                  tipo="text"
                  nombre="Ingrese el título"
                  valor={titulop}
                  cambio={(e) => setTitulop(e.target.value)}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="autor" className="col-form-label">
                  Autor
                </label>
                <Input
                  tipo="text"
                  nombre="Ingrese el autor"
                  valor={autorp}
                  cambio={(e) => setAutorp(e.target.value)}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="estado" className="col-form-label">
                  Estado
                </label>
                <CheckBooks
                  ventaMarcado={estadoVentap}
                  interMarcado={estadoInterp}
                  cambioInter={(checked) => {setEstadoInterp(checked); if(checked) setEstadoVentap(false)}}
                  cambioVenta={(checked) => {setEstadoVentap(checked); if(checked) setEstadoInterp(false)}}

                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="categoria" className="col-form-label">
                  Categoría
                </label>
                <CategoriaBooks
                  valor={categoriap}
                  cambio={(e) => setCategoriap(e.target.value)}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="ubicacion" className="col-form-label">
                  Ubicación
                </label>
                <Input
                  tipo="text"
                  nombre="Ingrese la ubicación"
                  valor={ubicacionp}
                  cambio={(e) => setUbicacionp(e.target.value)}
                />
              </div>
            </form>
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={ocultar}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={() => { validarInputs()}}>
              Subir cambios
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  
    )
}
export default ModalPut