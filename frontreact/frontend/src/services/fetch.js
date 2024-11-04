import { muestraAlerta } from "./alertas";
import { traerCookie } from "./cookies";
const cookie = traerCookie('token_inicio')
const api = ('http://127.0.0.1:8000/api/')

//POST
async function postData(obj, endpoint) {
    try {
        const response = await fetch(api+endpoint,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${cookie}` 
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

//GET
async function getData(endpoint, id='') {
    try {
        const response = await fetch(api+endpoint+'/'+id)
        const data = await response.json()
        return data        
    } catch (error) {
        console.log(error);
        return null
    }
}
export {getData}

// GET para usarlo en filtro y estado
async function getBusqueda(termino, busqueda) {
    try {
        const response = await fetch(`${api}libros/${termino}/${busqueda}`)
        const data = await response.json()
        return data        
    } catch (error) {
        console.log(error);
        return null
    }
}
export {getBusqueda}

// DELETE, según su ID
async function deleteData(endpoint, id='') {
    try {
        const response = await fetch(api+endpoint+'/'+id,{
            method:'DELETE',
            headers: {'Authorization': `Bearer ${cookie}`}
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
        const response = await fetch(`http://127.0.0.1:8000/api/librosPut/${id}/`, { 
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie}`
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
export { putData }

async function patchData(obj, endpoint) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/${endpoint}`, { 
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie}`
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
export { patchData }


async function getBarraBusqueda(busqueda) {
    try {
        const response = await fetch(`${api}libros/busqueda/?q=${busqueda}`)
        const data = await response.json()
        return data        
    } catch (error) {
        console.log(error);
        return null
    }
}
export {getBarraBusqueda}