/* una función es un conjunto de instrucciones
*
* declarar (crearlas)
* invocar (utilizarlas)
*/
//Funciones declaradas
function saludar(){ // declarando
    console.log("Hola estudiante!")
}
// function nombre () { instrucciones }


//invocar:
saludar()


/************************************/
// parametro: es un valor que va a ingresar el usuario, comodin
function siguiente (numero){
console.log(numero+1)

}
siguiente(1)
siguiente(10)

function saludarConParametro(nombre){
    console.log("Hola " + nombre)
}

saludarConParametro("Esteban")

/************************************/
function sumarDos (numero1,numero2){
    let resultado = numero1 + numero2
    return resultado
}

function mostrar (visible){
    console.log(visible)
}

mostrar( sumarDos(1,2) )
console.log(sumarDos(2,3))

/************************************* */
function calculadora (numero1,numero2,operacion){
    if(operacion === "+"){
        return numero1 + numero2
    }
    else if(operacion === "-"){
        return numero1 - numero2
    }
    else if(operacion === "*"){
        return numero1 * numero2
    }
    else if(operacion === "/"){
        if(numero2 !== 0){
        return numero1 / numero2}
        else{
            return "No se puede dividir por cero"
        }
    }else{
        return "Ingrese una operación valida"
    }
}

mostrar(calculadora(1,2,"+"))
mostrar(calculadora(2,3,"-"))
mostrar(calculadora(5,10,"*"))
mostrar(calculadora(8,4,"/"))
mostrar(calculadora(8,0,"/"))

/************************************* */
//SCOPE
let variableNombre = "Esteban" //variable global

function nuevoAmbito(){ 
    let edad = 29 // variable local
    let variableNueva;
    return edad
}

function saludarALaVariable(){
    return "Hola "+ variableNombre +" " +nuevoAmbito()
    let variableNueva;
}
mostrar(saludarALaVariable())

/************************************* */
//Funciones anonimas o funciones expresadas

let suma = function (a,b){
    return a + b
}
let resta = function(a,b){
    return a -b
}
mostrar(suma(1,2))
mostrar(resta(2,1))

//Diferencia de declaradas vs expresadas
mostrar(duplicarDeclarada(4))
// mostrar(duplicarExpresada(5))
// ReferenceError: Cannot access 'duplicarExpresada' before initialization

function duplicarDeclarada(numero){
    return numero*2
}

let duplicarExpresada = function (numero){
    return numero *2
}

mostrar(duplicarExpresada(5))


/**************************************/
// Funcion flecha
/* funcion multiplicar(a,b){ return a * b}
*
*/
let multiplicar = (a,b) => a * b // >1 parametro va con parentesis
let siguienteFlecha = numero => numero+1
mostrar(siguienteFlecha(1))
mostrar(multiplicar(2,2))

/* Una funcion que: 
-Calcular costo total de productos y/o servicios seleccionados por el usuario.
-Calcular pagos en cuotas sobre un monto determinado.
-Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
-Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.
-Calcular edad promedio de personas registradas.
-Calcular nota final de alumnos ingresados. 
-Nos indique si el numero es par o impar
*/

