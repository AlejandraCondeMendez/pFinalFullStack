// eslint-disable-next-line react/prop-types
const Form = ({ number, email}) => {
    return (
      <>
        <form>
          <fieldset disabled="">
            <legend>Information del contacto</legend>
            <div className="mb-3 w-50">
              <label htmlFor="disabledTextInput" className="form-label">
                Número de teléfono
              </label>
              <div className="inputCardPag">
                <input
                  disabled
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="Disabled input"
                  value={number}
                />
              </div>
            </div>
            <div className="mb-3 w-50">
              <label htmlFor="disabledTextInput" className="form-label">
                Correo
              </label>
              <div className="inputCardPag">
                <input
                  disabled
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="Disabled input"
                  value={email}
                />
              </div>
            </div>
          </fieldset>
        </form>
        <br /><br />
      </>
    )
  }
  export default Form