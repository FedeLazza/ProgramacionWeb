
function calcTalle(){
    let talleCorrecto = 0;
    let A = document.getElementById("varA").valueAsNumber;
    let B = document.getElementById("varB").valueAsNumber;
    let C = document.getElementById("varC").valueAsNumber;
    if(A <= 47 && B <= 76 && C <= 19){
        document.body.append("Su talle es Small (S)");
    } else if(A <= 49 && B <= 77 && C <= 20){
        document.body.append("Su talle es Medium (M)");            
    } else if(A <= 51 && B <= 78 && C <= 21){
        document.body.append("Su talle es Large (L)");
    } else if( A <= 53 && B <= 79 && C <= 22){
        document.body.append("Su talle es Extra Large (XL)");
    } else if(A <= 55 && B <= 80 && C <= 23){
        document.body.append("Su talle es Extra Extra Large (XXL)");
    }
}

/*function calcTalle(){
    let talleCorrecto = 0;
    let A = document.getElementById("varA").valueAsNumber;
    let B = document.getElementById("varB").valueAsNumber;
    let C = document.getElementById("varC").valueAsNumber;
    if(A <= 47 && B <= 76 && C <= 19){
        alert("Su talle es Small (S)");
    } else if(A <= 49 && B <= 77 && C <= 20){
        alert("Su talle es Medium (M)");            
    } else if(A <= 51 && B <= 78 && C <= 21){
        alert("Su talle es Large (L)");
    } else if( A <= 53 && B <= 79 && C <= 22){
        alert("Su talle es Extra Large (XL)");
    } else if(A <= 55 && B <= 80 && C <= 23){
        alert("Su talle es Extra Extra Large (XXL)");
    }
} */
