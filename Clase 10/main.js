console.log("Soy externo")
//Para acceder a un ID
let parrafo1 = document.getElementById("pConId")
//Para acceder a una clase
console.log(parrafo1)
let parrafo2 = document.getElementsByClassName("pConClase")
console.log(parrafo2)
//Para acceder a una etiqueta
let parrafo3 = document.getElementsByTagName("p")
console.log(parrafo3)

//Cambiar texto con un botÃ³n
function cambiarTitular(){
let titular1 = document.getElementById("titular")
titular1.innerText = "Hola cosa"
}

function hacerAparecer(){
    let contenedor = document.getElementById("vacio")
    contenedor.innerHTML = " <h2>BU!!</h2>"
    contenedor.className ="titularSecundario"
    let texto = "Hola"
    contenedor.append(texto)
}
let paises= document.getElementsByClassName("paises")
console.log(paises)
function borrarPais(){
    let paises= document.getElementsByClassName("paises")
    
    paises[0].remove()
    console.log(paises)
}
function sumar(valor){
    return parseInt(valor) + 1
}

function sumarEdad(){
    let nombreUsuario = document.getElementById("nombre").value
    let edadUsuario = document.getElementById("edad").value
    document.body.append("El nombre del usuario es: " + nombreUsuario + " y va a cumplir " + (parseInt(edadUsuario)+1))
    let chequeado = document.getElementById("bases").checked
    if(chequeado!= true){
        alert("Debe estar de acuerdo con las condiciones")
    }
    //ECMASCRIPT 6
    //template literal
    //back tick ``
    document.body.append(`El nombre de usuario es ${nombreUsuario} y va a cumplir ${sumar(edadUsuario)}`)

}

//query = consulta
let parrafos = document.querySelectorAll("p")
console.log(parrafos)
let seleccionarUno = document.querySelector("#titular")
console.log(seleccionarUno)
let seleccionarClase = document.querySelectorAll(".paises")
console.log(seleccionarClase)
let seleccionarClaseUnico = document.querySelector(".paises")
console.log(seleccionarClaseUnico)

/*
1) Crear una web nueva con la estructura basica
2) Enlazarla a JavaScript
3) Crear un formulario de registro
4) Preguntar si la edad es mayor a 18, en caso contrario, indicarle al usuario que no se puede registrar
5) Obligar al usuario a estar de acuerdo con terminos y condiciones
6) Mostrarle al usuarios en un parrafo, los datos que ingreso
*/