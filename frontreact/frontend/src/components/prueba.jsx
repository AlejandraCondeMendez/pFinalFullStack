// import { useState } from "react"
// import "../styles/CardPago.css"
// import { traerCookie } from "../services/cookies"
// import { postData } from "../services/fetch"
// import { muestraAlerta } from "../services/alertas"

// const CardPago = ({ total }) => {


//   const [numTarjeta, setNumTarjeta] = useState("")
//   const [fechaVencimiento, setFechaVencimiento] = useState("")
//   const [cvv, setCvv] = useState("")

//   const validarPago = async () => {
//     const cookiePrestamo = JSON.parse(traerCookie('localPrestamo')) //objeto        
//     const americanRegex = /^3[47][0-9]{13}$/
//     const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/
//     const masterRegex = /^(5[1-5][0-9]{14}|2[2-7][0-9]{14})$/
//     const fechaRegex = /^(0[1-9]|1[0-2])\/\d{2}$/
//     const cvvRgex = /^[0-9]{3,4}$/

//     if(cookiePrestamo && cookiePrestamo.length > 0 === total == 0) {
//       console.log("entra");
//       const peticionPrestamo = await postData(cookiePrestamo, 'libros/prestamo')
//       console.log(peticionPrestamo);
//       return
//     }

//     if (americanRegex.test(numTarjeta) || visaRegex.test(numTarjeta) ||
//       masterRegex.test(numTarjeta) &&
//       fechaRegex.test(fechaVencimiento) && cvvRgex.test(cvv)) {

//       const infoCompra = {
//         libro_precio_total: total,
//         usuario_compra: traerCookie("localUsuarioID"),
//         libros_compra: JSON.parse(localStorage.getItem("localCompras"))
//       }
//       const peticion = await postData(infoCompra, "libros/compras")
//       if(cookiePrestamo && cookiePrestamo.length > 0) {
//       const peticionPrestamo = await postData(cookiePrestamo, 'libros/prestamo')
//       console.log(peticionPrestamo);
//     }
//       console.log(infoCompra);
//       console.log(peticion);
          
      
//       if (peticion) {
//         localStorage.clear()
//         muestraAlerta("Compra éxitosa", "success")
//       }
//     }else{
//       console.log("Hubo un error en el pago");
      
      
//     }
//   }