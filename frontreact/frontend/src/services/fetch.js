import { muestraAlerta } from "./alertas";
import { traerCookie } from "./cookies";

const api = ('http://127.0.0.1:8000/api/')

//POST
async function postData(obj, endpoint) {
    try {
        const response = await fetch(api+endpoint,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        })

        const data = await response.json()
        if(!response.ok){
            muestraAlerta(data.falso,"error");
        }else{
            muestraAlerta(data.success,"success");
        }
        return data
    } catch (error) {
        console.log(error);
    }
}
export {postData}

//POST
// Se hizo otro fetch solo para inicio de sesión para que así no saliera la alertade success.

async function postDataForUser(obj, endpoint) {
    try {
        const response = await fetch(api+endpoint,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        })

        const data = await response.json()
        if(!response.ok){
            muestraAlerta(data.falso,"error");
        }
        return data
    } catch (error) {
        console.log(error);
    }
}
export {postDataForUser}

const cookie = traerCookie('token_inicio')

//GET
async function getData(endpoint, id='') {
    try {
        const response = await fetch(api+endpoint+'/'+id, {
            headers: {'Authorization': `Bearer ${cookie}`}
        })
        const data = await response.json()
        return data        
    } catch (error) {
        console.log(error);
        return null
    }
}
export {getData}

// DELETE, según su ID
async function deleteData(endpoint, id='') {
    try {
        const response = await fetch(api+endpoint+'/'+id,{
            method:'DELETE'
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export {deleteData}

async function putData(obj, id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/librosPut/${id}/`, { // Cambiado para que obj no esté en la URL
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Corregido el nombre del encabezado
            },
            body: JSON.stringify(obj)
        });
        const data = await response.json();
        return data;   
    } catch (e) {
        console.log(e);
        return null;
    }  
} 

export { putData };
