
let nombre = "Esteban"
let edad = "29"
let cargo = "profesor"


/*LOS ARRAYS EMPIEZAN EN 0
ej.  0,1,2...
tienen n-1 elementos
*/

let profesor = ["Esteban", 29, "profesor", "otra cosa"]
console.log(profesor.length)

for(let i = 0; i < profesor.length; i++){
  profesor[i] = profesor[i] + 1; /*le agrega un uno al final de cada indice*/
  console.log(profesor[i]);
}

profesor.push("El mejor")
console.log(profesor)
/*Me agrega al final*/

profesor.unshift("Mutea la compu")
console.log(profesor)
/*Me agrega al principio*/

profesor.pop("")
console.log(profesor)
/*Me borra al final*/

profesor.shift("")
console.log(profesor)
/*Me borra al principio*/

let ultimo = profesor.pop()
console.log(ultimo)
/*pop toma el ultimo elemento y lo guarda. Aca lo returneo*/

console.table(profesor)
/*Me lo muestra todo en tabla */

profesor.splice(1,2)
console.log(profesor)
profesor.splice(profesor.length/2, profesor.length)
console.log(profesor)
/*corto a la mitad*/
let mitad = console.log(mitad)

/**************************************/
let equipo = ["steve", "dani", "guille"]
console.log(equipo)
let frase= equipo.join(" mulea a ")
/*Me agrega "mulea a" entre cada uno*/

/**************************************/
let perros = ["firulais", "odin"]
let gatos = ["donna", "michi"]
let mascotas = perros.concat(gatos)
console.log(mascotas)
/*.concat concatena 2 arrays */

/**************************************/
let letras = ["A", "B", "C", "D", "E"]
let nuevo = letras.slice(letras.length/2, letras.length)
console.log(letras)
console.log(nuevo)
//.slice crea un nuevo array desde el num "letras.length/2"
let invertido = console.log(letras.reverse())
console.log(invertido) //doy vuelta el array 0,1,2 a 2,1,0
console.log(letras.includes("a")) //si contiene a devuelve true
console.log(letras.includes("f")) //tira false
console.log(letras.indexOf("a"))//me indica en que indice esta el elemnto

if (letras.includes("a")){
    console.log()
}
/*1)Escribir un array con la cantidad de valores que quiera
*2)En una variable, asignar el valor de un elemento que este en el array
*3)Escribir un codigo que elimine ese elemento (el de la variable) del array
*/
let array = ["algo", "coso", "cosa"]//ej1
console.log(array)
let variable = "coso"//ej2
console.log(array.includes(variable))//chequeo q ej2 esta bien. variable ene el array
//ej3
if (console.log(array.includes(variable)) == true){
  let cortado = array.pop(variable);
  console.log(cortado);
}
console.log(cortado)