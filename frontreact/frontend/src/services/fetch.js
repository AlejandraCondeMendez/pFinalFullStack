import { muestraAlerta } from "./alertas";

const api = ('http://127.0.0.1:8000/api/')

async function postData(obj, endpoint) {
    try {
        const response = await fetch(api+endpoint,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        }) 
        const respuesta = await response.json()
        if(!response.ok){
            muestraAlerta(respuesta.error,"error");
        }else{
            muestraAlerta(respuesta.success,"success");
        }
        return respuesta
    } catch (error) {
        console.log(error);   
    }
}
export {postData}

async function postDataForUser(obj, endpoint) {
    try {
        const response = await fetch(api+endpoint,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        })
        const respuesta = response.json()
        if(!response.ok){
            muestraAlerta(respuesta.error,"error");
        }
        return respuesta
    } catch (error) {
        console.log(error);   
    }
}
export {postDataForUser}


