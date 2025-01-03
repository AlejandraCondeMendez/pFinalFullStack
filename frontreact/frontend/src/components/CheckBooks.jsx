// eslint-disable-next-line react/prop-types
const CheckBooks = ({ ventaMarcado, interMarcado, cambioVenta, cambioInter }) => {
    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    checked={ventaMarcado} 
                    onChange={cambioVenta}
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
                    onChange={cambioInter} 
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Préstamo
                </label>
            </div>
        </>
    );
};
export default CheckBooks;