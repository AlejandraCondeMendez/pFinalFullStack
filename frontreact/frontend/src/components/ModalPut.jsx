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



/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import CategoriaBooks from "./CategoriaBooks";
import CheckBooks from "./CheckBooks";
import { muestraAlerta } from "../services/alertas";
import Botton from "./Botton";
import Input from "./Input";
import { putData } from "../services/fetch";

const ModalPut = ({ libro, setLibroSeleccionado }) => {
  const [titulo, setTitulo] = useState(libro.titulo);
  const [autor, setAutor] = useState(libro.autor);
  const [estadoVenta, setEstadoVenta] = useState(libro.estado === "Venta");
  const [estadoIntercambio, setIntercabmio] = useState(
    libro.estado === "Intercambio"
  );
  const [categoria, setCategoria] = useState(libro.categoria);
  const [ubicacion, setUbicacion] = useState(libro.ubicacion);

  const tituloRef = useRef("");
  const autorRef = useRef("");
  const ubicacionRef = useRef("");

  const validacionModalBook = async () => {
    const tituloValidar = tituloRef.current.value.trim();
    const autorValidar = autorRef.current.value.trim();
    const ubiValidar = ubicacionRef.current.value.trim();

    if (!tituloValidar || !autorValidar || !ubiValidar) {
      muestraAlerta("Por favor llene los campos vacíos", "error");
    } else {
      const libroActualizado = {
        id: libro.id, // Asegúrate de que el id del libro esté presente
        titulo: tituloValidar,
        autor: autorValidar,
        estado: estadoIntercambio
          ? "Intercambio"
          : estadoVenta
          ? "Venta"
          : "No hay estado",
        categoria: categoria || null, // Asegúrate de que la categoría no sea undefined
        ubicacion: ubiValidar,
        usuarioLibro: localStorage.getItem("localUsuarioID"), // Si este campo es necesario en la API
      };

      try {
        const response = await putData(libroActualizado, libro.id); // Aquí el id del libro a editar
        console.log(response.usuarioLibro);
        if (response.usuarioLibro) {
          muestraAlerta("Libro actualizado con éxito", "success");
          setLibroSeleccionado(null); // Cerrar modal al guardar
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
        muestraAlerta("Error en la solicitud", "error");
      }
    }
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block" }}
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Editar libro
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={() => setLibroSeleccionado(null)} // Cerrar modal
            />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Titulo
                </label>
                <Input
                  tipo={"text"}
                  refvali={tituloRef}
                  valor={titulo}
                  cambio={(e) => setTitulo(e.target.value)}
                  clase={"form-control"}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Autor
                </label>
                <Input
                  tipo={"text"}
                  refvali={autorRef}
                  valor={autor}
                  cambio={(e) => setAutor(e.target.value)}
                  clase={"form-control"}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Estado
                </label>
                <CheckBooks
                  ventaMarcado={estadoVenta}
                  interMarcado={estadoIntercambio}
                  cambioVenta={(e) => setEstadoVenta(e.target.checked)}
                  cambioInter={(e) => setIntercabmio(e.target.checked)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Categoría
                </label>
                <CategoriaBooks
                  valor={categoria}
                  cambio={(e) => setCategoria(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Ubicación
                </label>
                <Input
                  tipo={"text"}
                  refvali={ubicacionRef}
                  valor={ubicacion}
                  cambio={(e) => setUbicacion(e.target.value)}
                  clase={"form-control"}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setLibroSeleccionado(null)}
            >
              Cerrar
            </button>
            <Botton
              tipo={"button"}
              clase={"btn btn-primary"}
              nombre={"Guardar"}
              evento={validacionModalBook}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPut;