/*
1) Crear una web nueva con la estructura basica
2) Enlazarla a JavaScript
3) Crear un formulario de registro
4) Preguntar si la edad es mayor a 18, en caso contrario, indicarle al usuario que no se puede registrar
5) Obligar al usuario a estar de acuerdo con terminos y condiciones
6) Mostrarle al usuarios en un parrafo, los datos que ingreso
*/

function chequear(){
    //let edadUsuario = document.getElementById("")
    let basesCond = document.getElementById("bases").checked
    if(basesCond!= true){
        alert("Debe aceptar las bases y condiciones")
    }
    
}


/*
function sumarEdad(){
    let nombreUsuario = document.getElementById("nombre").value
    let edadUsuario = document.getElementById("edad").value
    document.body.append("El nombre del usuario es: " + nombreUsuario + " y va a cumplir " + (parseInt(edadUsuario)+1))

    let chequeado = document.getElementById("bases").checked
    if(chequeado!= true){
        alert("Debe estar de acuerdo con las condiciones")
    }
}
*/