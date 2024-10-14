/* eslint-disable react/prop-types */
import Input from "./Input";
import CheckBooks from "./CheckBooks";
import CategoriaBooks from "./CategoriaBooks";
import { useState, useEffect } from "react";
import { muestraAlerta } from "../services/alertas";
import { Button, Modal } from "react-bootstrap";

const ModalPut = ({mostrar, ocultar, id, tituloProp, autorProp, estadoProp, categoriaProp, ubicaProp, btnEditarProp}) => {
    
    const [titulop, setTitulop] = useState(tituloProp);
    const [autorp, setAutorp] = useState(autorProp);
    const [estadoVentap, setEstadoVentap] = useState(estadoProp === "Venta");
    const [estadoInterp, setEstadoInterp] = useState(estadoProp === "Intercambio");
    const [categoriap, setCategoriap] = useState(categoriaProp || "Categoría");
    const [ubicacionp, setUbicacionp] = useState(ubicaProp);

    useEffect(() => {
        setTitulop(tituloProp);
        setAutorp(autorProp);
        setEstadoVentap(estadoProp === "Venta");
        setEstadoInterp(estadoProp === "Intercambio");
        setCategoriap(categoriaProp);
        setUbicacionp(ubicaProp);
    }, [tituloProp, autorProp, estadoProp, categoriaProp, ubicaProp]);

    const validarInputs = () => {
        const tituloModal = titulop.trim();
        const autorModal = autorp.trim();
        const ubicaModal = ubicacionp.trim();

        if (!tituloModal || !autorModal || !ubicaModal) {
            muestraAlerta('Llenas los espacios vacíos', 'error');
        } else {
            // Enviar datos actualizados con venta e inter como booleanos
            btnEditarProp(id, titulop, autorp,estadoVentap,estadoInterp , categoriap, ubicacionp);
            ocultar();
        }
    };

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
                                cambioVenta={(checked) => {
                                    setEstadoVentap(checked); // Mantén el valor booleano
                                    if (checked) setEstadoInterp(false); // Desmarcar intercambio si se selecciona venta
                                }}
                                cambioInter={(checked) => {
                                    setEstadoInterp(checked); // Mantén el valor booleano
                                    if (checked) setEstadoVentap(false); // Desmarcar venta si se selecciona intercambio
                                }}
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
