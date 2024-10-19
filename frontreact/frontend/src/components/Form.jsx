// eslint-disable-next-line react/prop-types
const Form = ({ number, email, evento }) => {
    return (
      <>
        <form>
          <fieldset disabled="">
            <legend>Contact information</legend>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Phone number
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
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Email
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
        <hr></hr>
        <br /><br />
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Name
          </label>
          <div className="inputCardPag">
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Phone number
          </label>
          <div className="inputCardPag">
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Email adress
          </label>
          <div className="inputCardPag">
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Email adress"
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="disabledFieldsetCheck"
              disabled=""
            />
            <label className="form-check-label" htmlFor="disabledFieldsetCheck">
              Im not a robot
            </label>
          </div>
        </div>
        <button onClick={evento} type="submit" className="btn btn-primary">
          Solicitar información
        </button>
      </>
    )
  }
  export default Form