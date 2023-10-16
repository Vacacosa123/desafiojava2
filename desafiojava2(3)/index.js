// Obtener elementos
let aviso = document.querySelector("p");
let verificar = document.querySelector("#boton");
// Eventos


//
verificar.addEventListener("click", comprobar);

//Funciones


function comprobar(){
        let opcion1 = document.querySelector("#seleccion1").value;
        let opcion2 = document.querySelector("#seleccion2").value;
        let opcion3 = document.querySelector("#seleccion3").value;
        console.log(opcion1);
        console.log(opcion2);
        console.log(opcion3);

        if(opcion1===`9` && opcion2===`1` && opcion3===`1`){
                aviso.innerHTML="password 1 correcto";
        }
        else if(opcion1===`7` && opcion2===`1` && opcion3===`4`){
                aviso.innerHTML="password 2 correcto";
        
        }
        else {
                aviso.innerHTML="password incorrecto";
        }
       
        

        
        
        



}

