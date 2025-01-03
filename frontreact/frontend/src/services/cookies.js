const crearCookie=(nombre,valor,dias)=>{
    let expira = ""
    if (dias) {
        let date = new Date();
        date.setTime(date.getTime() + (dias * 24 * 60 * 60 * 1000));
        expira = "; expires=" + date.toUTCString();
    }
    document.cookie = nombre + "=" + (valor || "") + expira + "; path=/";
}
export {crearCookie}


const traerCookie=(nombre)=> {
    let nameEQ = nombre + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
export {traerCookie}

function borrarCookies() {
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        const cookieName = cookie.split("=")[0].trim();
        document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
}
export {borrarCookies}