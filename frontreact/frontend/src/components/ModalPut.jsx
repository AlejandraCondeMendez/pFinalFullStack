/* eslint-disable react/prop-types */
import Input from "./Input";
import CheckBooks from "./CheckBooks";
import CategoriaBooks from "./CategoriaBooks";
import { useState, useRef } from "react";
import { muestraAlerta } from "../services/alertas";
import { Button, Modal } from "react-bootstrap";
import { putData } from "../services/fetch";

const ModalPut = ({libroModal, seleccionarLibroModal}) => {
    
    const [tituloput, setTituloput] = useState(libroModal.titulo) // propiedades de la api, se accede por medio de la propiedad LibroModal
    const [autorput, setAutorput] = useState(libroModal.autor)
    const [estadoVentaput, setEstadoVentaput] = useState(libroModal.estado === "Venta")
    const [estadoInterput, setEstadoInterput] = useState(libroModal.estado === "Intercambio")
    const [categoriaput, setCategoriaput] = useState(libroModal.categoria)
    const [ubicacionput, setUbicacionput] = useState(libroModal.ubicacion)

    const tituloRef = useRef('')
    const autorRef = useRef('')
    const ubicacionRef = useRef('')

    const validacionesModal = async () => {
        const tituloModal = tituloRef.current.value.trim()
        const autorModal = autorRef.current.value.trim()
        const ubicacionModal = ubicacionRef.current.value.trim()

        if (!tituloModal || !autorModal || !ubicacionModal) {
            muestraAlerta('Porfavor llene los espacios vacíos')
        } else {
            const LibroActualizado = {
                id: libroModal.id, // id del libro
                titulo: tituloput,
                autor: autorput,
                estado: estadoInterput ? 'Intercambio': estadoVentaput ? 'Venta' : 'No hay estado',
                categria: categoriaput,
                ubicacion: ubicacionput,
                usuarioLibro: localStorage.getItem('localUsuarioID') //trae al usuario que inció sesión
            }
            try {
                const response = await putData(LibroActualizado, libroModal.id)
                if (response.usuarioLibro){
                    muestraAlerta('Libro actualizado con éxito', 'success')
                    seleccionarLibroModal(null) //cierra el modal
                }
            } catch (error) {
                console.error('Error en la solicitud: ', error);
                muestraAlerta('Error en la actualización de datos', 'error')
            }
        }
    }

    return (
        <>
            <Modal>
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
                                valor={tituloput}
                                cambio={(e) => setTituloput(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="autor" className="col-form-label">
                                Autor
                            </label>
                            <Input
                                tipo="text"
                                nombre="Ingrese el autor"
                                valor={autorput}
                                cambio={(e) => setAutorput(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="estado" className="col-form-label">
                                Estado
                            </label>
                            <CheckBooks
                                ventaMarcado={estadoVentaput} // Aquí pasas el booleano
                                interMarcado={estadoInterput} // Aquí pasas el booleano
                                cambioVenta={(e) => setEstadoVentaput(e.target.checked)}
                                cambioInter={(e) => setEstadoInterput(e.target.checked)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="categoria" className="col-form-label">
                                Categoría
                            </label>
                            <CategoriaBooks
                                valor={categoriaput}
                                cambio={(e) => setCategoriaput(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="ubicacion" className="col-form-label">
                                Ubicación
                            </label>
                            <Input
                                tipo="text"
                                nombre="Ingrese la ubicación"
                                valor={ubicacionput}
                                cambio={(e) => setUbicacionput(e.target.value)}
                            />
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={validacionesModal}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalPut