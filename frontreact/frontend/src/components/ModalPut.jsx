/* eslint-disable react/prop-types */
import Input from "./Input";
import CheckBooks from "./CheckBooks";
import CategoriaBooks from "./CategoriaBooks";
import { useState, useEffect, useRef } from "react";
import { muestraAlerta } from "../services/alertas";
import { Button, Modal } from "react-bootstrap";

const ModalPut = ({libroModal, seleccionarLibroModal}) => {
    
    const [tituloput, setTituloput] = useState(libroModal.titulo) // propiedades de la api, se accede por medio de la propiedad LibroModal
    const [autorput, setAutorput] = useState(libroModal.autor)
    const [estadoventaentaput, setEstadoVentaput] = useState(libroModal.estado === "Venta")
    const [estadoInterput, setEstadoInterput] = useState(libroModal.estado === "Intercambio")
    const [categoriaput, setCategoriaput] = useState(libroModal.categoria)
    const [ubicacionput, setUbicacionput] = useState(libroModal.ubicacion)

    const tituloRef = useRef('')
    const autorRef = useRef('')
    const ubicacionRef = useRef('')

    const validacionesModal =()=>{
        const tituloModal = tituloRef.current.value.trim()
        const autorModal = autorRef.current.value.trim()
        const ubicacionModal = ubicacionRef.current.value.trim()

        if (!tituloModal || !autorModal || !ubicacionModal) {
            muestraAlerta('Porfavor llene los espacios vacíos')
        }
    }






    return (
        <>
            <Modal show={mostrar} onHide={ocultar} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Libro</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="titulo" className="col-form-label">
                                Título
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
                                ventaMarcado={estadoVentap} // Aquí pasas el booleano
                                interMarcado={estadoInterp} // Aquí pasas el booleano
                                cambioVenta={(e) => cambioVenta(e.target.checked)}
                                cambioInter={(e) => cambioInter(e.target.checked)}
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
                    <Button variant="primary" onClick={validarInputs}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalPut;
