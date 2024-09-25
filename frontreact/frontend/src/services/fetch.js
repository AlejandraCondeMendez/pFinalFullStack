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
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);   
    }
}
export {postData}



