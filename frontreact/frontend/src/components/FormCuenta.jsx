import { traerCookie } from "../services/cookies"
import Input from "../components/Input"
import { useEffect, useRef, useState } from "react"
import { getData, patchData } from "../services/fetch"
import ListaComentarios from "./ListaComentarios"
import { muestraAlerta } from "../services/alertas"
import '../styles/FormCuenta.css'

const FormCuenta = () => {
    const [infoCuenta,setInfoCuenta] = useState(true)
    const [infoComentarios,setInfoComentarios] = useState(false)

    const [mostrarContra, setMostrarContra] = useState(false)
    const [contraAct, setContraAct] = useState('')
    const [contraNueva, setContraNueva] = useState('')
    const [contraConfirmar, setContraConfirmar] = useState('')

    const contraRef = useRef('')
    const contraNuevaRef = useRef('')
    const contraConfRef = useRef('')

    const [monstrarUser, setMostrarUser] = useState(false)
    const [usuarioAct, setUsuarioAct] = useState('')
    const [usuarioNuevo, setUsuarioNuevo] = useState('')

    const usuarioRef = useRef('')
    const usuarioNuevoRef = useRef('')

    // Estados para traer los comentarios
    const [comentarios, setComentarios] = useState([])
    useEffect(()=>{
        const traerComentarios = async () =>{
            const getComentarios = await getData('libros/usuarios/comentarios', traerCookie('localUsuarioID'))
            setComentarios(getComentarios)
        }
        traerComentarios()
    },[])

    const cambioContra = async()=>{
        const contraVal = contraRef.current.value.trim()
        const contraNuevaVal = contraNuevaRef.current.value.trim()
        const contraConfVal = contraConfRef.current.value.trim()
        if (!contraVal || !contraNuevaVal || !contraConfVal) {
            muestraAlerta('Por favor llene los campos vacíos', 'error')
            return
        }
        const infoContra = {
            contra_actual: contraAct,
            contra_nueva: contraNueva 
        }
        await patchData(infoContra, 'usuario/contra/')
        muestraAlerta('Contraseña actualizada', 'success')

    }

    const cambioNombre = async()=>{
        const usuarioVal = usuarioRef.current.value.trim()
        const usuarioNuevoVal = usuarioNuevoRef.current.value.trim()
        if (!usuarioVal || !usuarioNuevoVal) {
            muestraAlerta('Por favor llene los campos vacíos', 'error')
            return
        }
        const infoNombre = {
            nombreUsuario_actual: usuarioAct,
            nombreUsuario_nuevo: usuarioNuevo 
        }
        await patchData(infoNombre, 'usuario/nombre/')
        muestraAlerta('Nombre de usuario actualizado', 'success')

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
        <section style={{ display: 'flex', gap: 210, justifyContent:'center', marginTop:'3%'}}>
                <div className="enlace-cuenta" >
                    <a onClick={()=>{setInfoCuenta(!infoCuenta)}}>Información de la cuenta</a>
                </div>
                <div className="enlace-cuenta" style={{marginRight:'90px', position:'relative'}}>
                    <a onClick={()=>setInfoComentarios(!infoComentarios)}>Mis reseñas</a>
                </div>            
        </section>

        {infoCuenta &&
            <div>
                <form>
                    <fieldset disabled="">
                        <legend style={{textAlign:'center', marginTop:'-2%', marginBottom:'3%', fontSize:'30px'}}>Información de la cuenta</legend>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label" style={{marginLeft:'15%', fontSize:'15px'}}>
                                Nombre de usuario
                            </label>
                            <div style={{ width: '30%', marginLeft: '15%' }}>
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
                            <label htmlFor="disabledTextInput" className="form-label" style={{marginLeft:'15%', fontSize:'15px'}}>
                                Correo electrónico
                            </label>
                            <div style={{ width: '30%', marginLeft: '15%' }}>
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
                            <label htmlFor="disabledTextInput" className="form-label" style={{marginLeft:'15%', fontSize:'15px'}}>
                                Número de teléfono
                            </label>
                            <div style={{ width: '30%', marginLeft: '15%' }}>
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
                            <label htmlFor="disabledTextInput" className="form-label" style={{marginLeft:'15%', fontSize:'15px'}}>
                                Ubicación
                            </label>
                            <div style={{ width: '30%', marginLeft: '15%' }}>
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
                            <div className="form-check" style={{position:'relative', marginLeft:'18%'}}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={()=>setMostrarContra(!mostrarContra)}
                                    id="disabledFieldsetCheck"
                                    disabled=""
                                />
                                <label className="form-check-label" htmlFor="disabledFieldsetCheck" style={{position:'relative', marginLeft:'5%'}}>
                                    Cambiar contraseña
                                </label>
                            </div>
                        </div>
                        <div className="form-check" style={{position:'relative', marginLeft:'18%'}}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                onChange={()=>setMostrarUser(!monstrarUser)}
                                id="disabledFieldsetCheck"
                                disabled=""
                            />
                            <label className="form-check-label" htmlFor="disabledFieldsetCheck" style={{position:'relative', marginLeft:'5%'}}>
                                Cambiar nombre de usuario
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={cambiosUsuario} style={{marginLeft:'22%', marginTop:'2%'}}>
                            Guardar cambios
                        </button>
                    </fieldset>
                </form>
            </div>
            }
            
            {mostrarContra && 
            <form className="formulario-cambio-contra" style={{marginLeft:'55%', position:'relative', marginTop:'-35%'}}>
                <div>
                    <h4> Actualizar contraseña</h4>
                </div>
                <Input tipo={'password'} nombre={'Contraseña actual'} refvali={contraRef} valor={contraAct} cambio={(e)=>setContraAct(e.target.value)} clase="inputForm"/>
                <Input tipo={'password'} nombre={'Contraseña nueva'} refvali={contraNuevaRef} valor={contraNueva} cambio={(e)=>setContraNueva(e.target.value)} clase="inputForm"/>
                <Input tipo={'password'} nombre={'Confirmar contraseña'} refvali={contraConfRef} valor={contraConfirmar} cambio={(e)=>setContraConfirmar(e.target.value)} clase="inputForm"/>
            </form>
            }

            {monstrarUser && 
            <form className="formulario-cambio-contra" style={{marginLeft:'55%', position:'relative', marginTop:'-35%'}}>
                <div>
                    <h4> Actualizar nombre de usuario</h4>
                </div>
                <Input tipo={'username'} nombre={'Nombre de usuario actual'} refvali={usuarioRef} valor={usuarioAct} cambio={(e)=>setUsuarioAct(e.target.value)} clase="inputForm"/>
                <Input tipo={'username'} nombre={'Nuevo nombre de usuario'} refvali={usuarioNuevoRef} valor={usuarioNuevo} cambio={(e)=>setUsuarioNuevo(e.target.value)} clase="inputForm"/>
            </form>
            }
            {infoComentarios && 
            <ListaComentarios habilitadosLista={false} comentarLista={comentarios}/>
        }
            </>
    )
}
export default FormCuenta