const api = ('http://127.0.0.1:8000/')

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
            throw new Error(errorData.error);
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);   
    }
}
export {postData}



