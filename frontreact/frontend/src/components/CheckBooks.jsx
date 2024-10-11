// eslint-disable-next-line react/prop-types
const CheckBooks = ({ventaMarcado, interMarcado, cambioVenta, cambioInter}) => {
    
    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    checked={ventaMarcado}
                    onChange={(e)=>cambioVenta(e.target.checked)}

                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Venta
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                    checked={interMarcado}
                    onChange={(e)=>cambioInter(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Intercambio
                </label>
            </div>

        </>
    )
}
export default CheckBooks