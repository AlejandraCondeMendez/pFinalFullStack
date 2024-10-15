/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import CategoriaBooks from "./CategoriaBooks";
import CheckBooks from "./CheckBooks";
import { muestraAlerta } from "../services/alertas";
import Botton from "./Botton";
import Input from "./Input";
import { putData } from "../services/fetch";


const ModalPut = ({ libroModal, setLibroModal }) => {
  const [tituloPut, setTituloPut] = useState(libroModal.titulo);
  const [autorPut, setAutorPut] = useState(libroModal.autor);
  const [estadoVentaPut, setEstadoVentaPut] = useState(libroModal.estado === "Venta");
  const [estadoIntercambioPut, setIntercabmioPut] = useState(
    libroModal.estado === "Intercambio"
  );
  const [categoriaPut, setCategoriaPut] = useState(libroModal.categoria);
  const [ubicacionPut, setUbicacionPut] = useState(libroModal.ubicacion);

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
        id: libroModal.id,
        titulo: tituloPut,
        autor: autorPut,
        estado: estadoIntercambioPut
          ? "Intercambio"
          : estadoVentaPut
          ? "Venta"
          : "No hay estado",
        categoria: categoriaPut || null, 
        ubicacion: ubicacionPut,
        usuarioLibro: localStorage.getItem("localUsuarioID"), 
      };

      try {
          const response = await putData(libroActualizado, libroModal.id); 
          if (response.usuarioLibro) {
          muestraAlerta("Libro actualizado con éxito", "success");
          setLibroModal(false); 
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
              onClick={() => setLibroModal(null)}  
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
                  valor={tituloPut}
                  cambio={(e) => setTituloPut(e.target.value)}
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
                  valor={autorPut}
                  cambio={(e) => setAutorPut(e.target.value)}
                  clase={"form-control"}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Estado
                </label>
                <CheckBooks
                  ventaMarcado={estadoVentaPut}
                  interMarcado={estadoIntercambioPut}
                  cambioVenta={(e) => setEstadoVentaPut(e.target.checked)}
                  cambioInter={(e) => setIntercabmioPut(e.target.checked)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Categoría
                </label>
                <CategoriaBooks
                  valor={categoriaPut}
                  cambio={(e) => setCategoriaPut(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Ubicación
                </label>
                <Input
                  tipo={"text"}
                  refvali={ubicacionRef}
                  valor={ubicacionPut}
                  cambio={(e) => setUbicacionPut(e.target.value)}
                  clase={"form-control"}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setLibroModal(null)}
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
