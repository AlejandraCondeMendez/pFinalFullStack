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
        if(!response.ok){
            const errorData = await response.json();
            muestraAlerta(errorData.error,"error");
        }else{
            const successData = await response.json();
            muestraAlerta(successData.success,"success");
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);   
    }
}
export {postData}



