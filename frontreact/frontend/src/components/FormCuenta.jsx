import { traerCookie } from "../services/cookies"

const FormCuenta = () => {
    return (
        <>
            <div style={{ textAlign: 'center', justifyContent: 'center' }}>
                <form>
                    <fieldset disabled="">
                        <legend>Información de la cuenta</legend>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">
                                Nombre de usuario
                            </label>
                            <div style={{ width: '30%', marginLeft: '35%' }}>
                                <input
                                    type="text"
                                    id="disabledTextInput"
                                    className="form-control"
                                    disabled
                                    placeholder="Usuario"
                                    value={traerCookie("nombreUsuario")}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">
                                Correo electrónico
                            </label>
                            <div style={{ width: '30%', marginLeft: '35%' }}>
                                <input
                                    type="text"
                                    id="disabledTextInput"
                                    className="form-control"
                                    disabled
                                    placeholder="Correo electrónico"
                                    value={traerCookie("correoUsuario")}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">
                                Número de teléfono
                            </label>
                            <div style={{ width: '30%', marginLeft: '35%' }}>
                                <input
                                    type="text"
                                    id="disabledTextInput"
                                    className="form-control"
                                    disabled
                                    placeholder="Teléfono"
                                    value={traerCookie("telefonoUsuario")}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-check" style={{position:'relative', marginLeft:'39%'}}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="disabledFieldsetCheck"
                                    disabled=""
                                />
                                <label className="form-check-label" htmlFor="disabledFieldsetCheck" style={{position:'relative', marginRight:'70%'}}>
                                    Cambiar contraseña
                                </label>
                            </div>
                        </div>
                        <div className="form-check" style={{position:'relative', marginLeft:'39%'}}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="disabledFieldsetCheck"
                                disabled=""
                            />
                            <label className="form-check-label" htmlFor="disabledFieldsetCheck" style={{position:'relative', marginRight:'62%'}}>
                                Cambiar nombre de usuario
                            </label>
                        </div>




                        <button type="submit" className="btn btn-primary">
                            Guardar cambios
                        </button>
                    </fieldset>
                </form>
            </div>

        </>
    )
}
export default FormCuenta