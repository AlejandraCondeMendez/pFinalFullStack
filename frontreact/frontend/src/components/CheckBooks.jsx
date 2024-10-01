const CheckBooks = () => {
    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Venta
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckChecked"
                    defaultChecked=""
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Intercambio
                </label>
            </div>

        </>
    )
}
export default CheckBooks