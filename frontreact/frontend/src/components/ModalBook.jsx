import CategoriaBooks from "./CategoriaBooks"
import CheckBooks from "./CheckBooks"

const ModalBook = () => {
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
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Autor
                                    </label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Estado
                                    </label>
                                    <div>
                                        <CheckBooks/>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        <CategoriaBooks/>
                                    </label>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Ubicación
                                    </label>
                                    <input type="text" className="form-control" id="recipient-name" />
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
                            <button type="button" className="btn btn-primary">
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default ModalBook