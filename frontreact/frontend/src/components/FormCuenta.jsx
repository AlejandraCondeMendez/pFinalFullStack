import { traerCookie } from "../services/cookies"
import Input from "../components/Input"
import { useState } from "react"
import { patchData } from "../services/fetch"

const FormCuenta = () => {
    const [mostrarContra, setMostrarContra] = useState(false)
    const [contraAct, setContraAct] = useState('')
    const [contraNueva, setContraNueva] = useState('')
    const [contraConfirmar, setContraConfirmar] = useState('')

    const [monstrarUser, setMostrarUser] = useState(false)
    const [usuarioAct, setUsuarioAct] = useState('')
    const [usuarioNuevo, setUsuarioNuevo] = useState('')

    const cambioContra = async()=>{
        const infoContra = {
            contra_actual: contraAct,
            contra_nueva: contraNueva 
        }
        await patchData(infoContra, 'usuario/contra/')        
    }

    const cambioNombre = async()=>{
        const infoNombre = {
            nombreUsuario_actual: usuarioAct,
            nombreUsuario_nuevo: usuarioNuevo 
        }
        await patchData(infoNombre, 'usuario/nombre/')        
    }

    const cambiosUsuario = async (e) => {
        e.preventDefault()
        if (mostrarContra) {
            await cambioContra()
        }
        if (monstrarUser) {
            await cambioNombre()
        }
    }
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
                            <label htmlFor="disabledTextInput" className="form-label">
                                Ubicación
                            </label>
                            <div style={{ width: '30%', marginLeft: '35%' }}>
                                <input
                                    type="text"
                                    id="disabledTextInput"
                                    className="form-control"
                                    disabled
                                    placeholder="Ubicación"
                                    value={traerCookie("ubicacionUsuario")}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-check" style={{position:'relative', marginLeft:'39%'}}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={()=>setMostrarContra(!mostrarContra)}
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
                                onChange={()=>setMostrarUser(!monstrarUser)}
                                id="disabledFieldsetCheck"
                                disabled=""
                            />
                            <label className="form-check-label" htmlFor="disabledFieldsetCheck" style={{position:'relative', marginRight:'62%'}}>
                                Cambiar nombre de usuario
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={cambiosUsuario}>
                            Guardar cambios
                        </button>
                    </fieldset>
                </form>
            </div>
            {mostrarContra && 
            <form>
                <Input tipo={'password'} nombre={'Contraseña actual'} cambio={(e)=>setContraAct(e.target.value)}/>
                <Input tipo={'password'} nombre={'Contraseña nueva'} cambio={(e)=>setContraNueva(e.target.value)}/>
                <Input tipo={'password'} nombre={'Confirmar contraseña'} cambio={(e)=>setContraConfirmar(e.target.value)}/>
            </form>
            }

            {monstrarUser && 
            <form>
                <Input tipo={'username'} nombre={'Nombre de usuario actual'} cambio={(e)=>setUsuarioAct(e.target.value)}/>
                <Input tipo={'username'} nombre={'Nuevo nombre de usuario'} cambio={(e)=>setUsuarioNuevo(e.target.value)}/>
            </form>
            }
        </>
    )
}
export default FormCuenta