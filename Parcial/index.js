function gotcha() {
  alert(
    "Dentro de poco tiempo se va a licitar un sistema de vuelos espaciales mediante el cual desde una plataforma, que quizá se instale en Córdoba, esas naves van a salir de la atmósfera, se van a remontar a la estratósfera, y desde ahí elegirán el lugar donde quieran ir, de tal forma que en una hora y media podremos estar en Japón, Corea o en cualquier parte del mundo."
  );
}

function calcTalle() {
  let A = document.getElementById("varA").valueAsNumber;
  let B = document.getElementById("varB").valueAsNumber;
  let C = document.getElementById("varC").valueAsNumber;
  let talleOk = document.querySelector("#talleOk");
  if (A <= 47 && B <= 76 && C <= 19) {
    talleOk.append("Su talle es Small (S)");
  } else if (A <= 49 && B <= 77 && C <= 20) {
    talleOk.append("Su talle es Medium (M)");
  } else if (A <= 51 && B <= 78 && C <= 21) {
    talleOk.append("Su talle es Large (L)");
  } else if (A <= 53 && B <= 79 && C <= 22) {
    talleOk.append("Su talle es Extra Large (XL)");
  } else {
    talleOk.append("Su talle es Extra Extra Large (XXL)");
  }
}

let arrayProducto = [];
let Total = 0;
function sumaProductos(Valoritem, Producto) {
  arrayProducto.push(Producto);
  Total = Total + Valoritem;
  document.getElementById("elTotal").innerHTML = "TOTAL: " + "$" + Total;
  console.log(arrayProducto);
  document.getElementById("valorProducto").value = Total;
  document.getElementById("listaProductos").value = arrayProducto;
  return Total;
}

function Vaciar() {
  Total = 0;
  document.getElementById("elTotal").innerHTML = "TOTAL: " + "$" + 0;
}
