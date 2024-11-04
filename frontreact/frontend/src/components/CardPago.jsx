/* eslint-disable react/prop-types */
import { useState } from "react"
import "../styles/CardPago.css"
import { traerCookie } from "../services/cookies"
import { postData } from "../services/fetch"
import { muestraAlerta } from "../services/alertas"

const CardPago = ({ total = 0 }) => {


  const [numTarjeta, setNumTarjeta] = useState("")
  const [fechaVencimiento, setFechaVencimiento] = useState("")
  const [cvv, setCvv] = useState("")

  const validarPago = async () => {
    const americanRegex = /^3[47][0-9]{13}$/
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/
    const masterRegex = /^(5[1-5][0-9]{14}|2[2-7][0-9]{14})$/
    const fechaRegex = /^(0[1-9]|1[0-2])\/\d{2}$/
    const cvvRgex = /^[0-9]{3,4}$/


    if (americanRegex.test(numTarjeta) || visaRegex.test(numTarjeta) ||
      masterRegex.test(numTarjeta) &&
      fechaRegex.test(fechaVencimiento) && cvvRgex.test(cvv)) {

      const infoCompra = {
        libro_precio_total: total,
        usuario_compra: traerCookie("localUsuarioID"),
        libros_compra: JSON.parse(localStorage.getItem("localCompras"))
      }
      const cookiePrestamo = JSON.parse(traerCookie('localPrestamo')) //objeto        
      const peticion = await postData(infoCompra, "libros/compras")
      const peticionPrestamo = await postData(cookiePrestamo, 'libros/prestamo')
      
      
      if (peticion && peticionPrestamo) {
        localStorage.clear()
        muestraAlerta("Compra éxitosa", "success")
      }
    }
    
  }

  return (
    <>
      <div className="payment-container">
        <h1>Tu compra</h1>
        <hr />
        <form>
          <div className="input-group">
            <label htmlFor="card-number">Número tarjeta</label>
            <input type="text" id="card-number" placeholder="XXXX XXXX XXXX XXXX" onChange={(e) => setNumTarjeta(e.target.value)} />
          </div>
          <div className="small-inputs">
            <div className="input-group">
              <label htmlFor="expiry-date">F.Vencimiento</label>
              <input type="text" id="expiry-date" maxLength={5} placeholder="MM/AA" onChange={(e) => setFechaVencimiento(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" placeholder="XXX" maxLength={4} onChange={(e) => setCvv(e.target.value)} />
            </div>
          </div>
          <div className="total">
            <span>Total</span>
            <span>₡ {total}</span>
          </div>
          <button type="button" onClick={validarPago}>Finalizar compra</button>
        </form>
      </div>
    </>
  )
}
export default CardPago