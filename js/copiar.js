//Aqui se llama la funcion onclick desde las mismas propiedades del bottom en el boton
function copiar(){
  console.log("entre a copiar bro")
   /* Get the text field */
   let copyText = document.querySelector("#desencriptar__respuesta");

   /* Select the text field */
   copyText.select();
   copyText.setSelectionRange(0, 99999); /* For mobile devices */
 
    /* Copy the text inside the text field */
   navigator.clipboard.writeText(copyText.value);
 
   /* Alert the copied text */
   alert("Copied the text: " + copyText.value);
}

// ****************************************************************

//Aqui se aplica un listener al boton2 y hago una funcion anonima
let copiar2 = document.querySelector("#desencriptar__button2");
copiar2.addEventListener("click" , function(){
  console.log("entro al metodo de copy con funcion anonima")
  let copyText = document.querySelector("#desencriptar__respuesta");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}) 


// ****************************************************************
//No funciono con la funcion copy, al parecer el execCommand ya es obsoleto
function copy() {
  let copyText = document.querySelector("#desencriptar__respuesta");
  copyText.select();
  document.execCommand("copy");
  console.log("Entro al copy de execCommand")
}
let copiar3 = document.querySelector("#desencriptar__button3");
copiar3.addEventListener("click", copy);
