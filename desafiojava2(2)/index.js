// Variables
let boton = document.querySelector("#comprar");
let acuso = document.querySelector("p");

// evento

boton.addEventListener("click", mayordedies)


// funcion

function mayordedies(){
    let a = document.querySelector("#sticker1").value;
    let b = document.querySelector("#sticker2").value;
    let c = document.querySelector("#sticker3").value;
    let suma = Number(a)+Number(b)+Number(c);
    console.log (suma);
    if ( suma > `10`){
        acuso.innerHTML="Llevas demasiados stickers";
    }
    else if(suma<=`10`){
        acuso.innerHTML="Llevas " + suma + " stickers";

    }


}

acuso.innerHTML=""


