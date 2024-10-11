import { muestraAlerta } from "./alertas";

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

async function putData(obj, endpoint) {
    try {
        const response = await fetch(api+endpoint+'/'+obj.id, {
            method: 'PUT',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
        const data = await response.json();
        return data   
    } catch (e) {
        console.log(e);
        return null;
    }  
} 
export default {putData}