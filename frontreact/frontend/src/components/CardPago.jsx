import "../styles/CardPago.css"
const CardPago = ({total,numTarjeta,numCVV,fechaCaducidad,btnComprar})=>{
    return(
        <>
        <div className="payment-container">
  <h1>Tu compra</h1>
  <hr />
  <form>
    <div className="input-group">
      <label htmlFor="card-number">Número tarjeta</label>
      <input type="text" id="card-number" placeholder="XXXX XXXX XXXX XXXX" />
    </div>
    <div className="small-inputs">
      <div className="input-group">
        <label htmlFor="expiry-date">F.Vencimiento</label>
        <input type="text" id="expiry-date" placeholder="MM/AA" />
      </div>
      <div className="input-group">
        <label htmlFor="cvv">CVV</label>
        <input type="text" id="cvv" placeholder="XXX" />
      </div>
    </div>
    <div className="total">
      <span>Total</span>
      <span>₡25.000</span>
    </div>
    <button type="submit">Finalizar compra</button>
  </form>
</div>

        </>
    )
}
export default CardPago