// let botonEncriptar = document.querySelector("#botonEncriptar")
let texto = document.querySelector("#mensajeEnviar");
console.log(texto.value);

let botonEncriptar = document.querySelector("#botonEncriptar");
botonEncriptar.addEventListener("click", ()=> encriptar(texto.value));

function encriptar(word){
  let word_encriptada = "";
  for(let i =0; i<word.length; i++){
      //console.log(word[i])
      switch(word[i]){
          case 'a':
              word_encriptada += "ai" 
            break;
          
            case 'e':
              word_encriptada += "enter"
          break;
          
          case 'i':
              word_encriptada += "imes"
          break;
          
          case 'o':
              word_encriptada += "ober"
          break;
          
          case 'u':
              word_encriptada += "ufat"
          break;
          
          default:
              word_encriptada += word[i];
      }
  }
  //console.log(word_encriptada);
  mostrar(word_encriptada);
}

function mostrar(mensajeEsperado){
 if(mensajeEsperado.length > 0){
    let mensaje_mostrar = document.querySelector("#desencriptar__respuesta");
    let mensaje_ignorar = document.querySelector(".desencriptar__subtitulo");
    mensaje_ignorar.style.display = "none"
    mensaje_mostrar.textContent = mensajeEsperado;

    let copiar = document.querySelector("#desencriptar__button");
    copiar.style.display = "unset";
    copiar.style.color = "red";
    // copiar.addEventListener("click",copiar)
    // copiar.addEventListener("click" , ()=> copiar )  //No sirve
    //console.log(copiar)
  }
  return mensajeEsperado;
}

function copiar(){
  console.log("entre a copiar bro")
   /* Get the text field */
   var copyText = document.querySelector("#desencriptar__respuesta");

   /* Select the text field */
   copyText.select();
   copyText.setSelectionRange(0, 99999); /* For mobile devices */
 
    /* Copy the text inside the text field */
   navigator.clipboard.writeText(copyText.value);
 
   /* Alert the copied text */
   alert("Copied the text: " + copyText.value);
}

texto.addEventListener('input', updateValue);
function updateValue(){
  //console.log(texto.value)
  if (texto.value.length == 0){
    let mensaje_mostrar = document.querySelector("#desencriptar__respuesta");
    mensaje_mostrar.textContent = "Ningún mensaje fue encontrado"

    let mensaje_ignorar = document.querySelector(".desencriptar p:nth-child(3)");
    mensaje_ignorar.textContent = "Ingresa el texto que desees encriptar o desencriptar"
    mensaje_ignorar.style.display = ""
  }
}
