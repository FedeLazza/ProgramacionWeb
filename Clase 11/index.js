console.log('hola')

document.getElementById('nombreIngresado').value = localStorage.getItem('nameUser')

function guardarData(){
    let value = document.getElementById('nombreIngresado').value
    localStorage.setItem('nameUser', value)
}

window.onload = document.getElementById('nombreIngresado').value