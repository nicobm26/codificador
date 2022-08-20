function mostrar(mensajeEsperado){
  if(mensajeEsperado.length > 0){
     let mensaje_mostrar = document.querySelector("#desencriptar__respuesta");
     let mensaje_ignorar = document.querySelector(".desencriptar__subtitulo");
     mensaje_ignorar.style.display = "none"
     mensaje_mostrar.textContent = mensajeEsperado;
 
     //Habilitar el boton de copiar 
     let copiar = document.querySelector("#desencriptar__button");
     let btcopiar2 = document.querySelector("#desencriptar__button2");
     let btcopiar3 = document.querySelector("#desencriptar__button3");
     copiar.style.display = "unset";
     let imagen = document.querySelector(".desencriptar__imagen");
     imagen.style.display = "none";
     
    //  btcopiar2.style.color = "red";
    //  btcopiar2.style.display = "unset";
    //  btcopiar3.style.display = "unset";
   }
 }

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

texto.addEventListener('input', updateValue);
function updateValue(){
  //console.log(texto.value)
  if (texto.value.length == 0){
    let mensaje_mostrar = document.querySelector("#desencriptar__respuesta");
    mensaje_mostrar.textContent = "Ningún mensaje fue encontrado"

    let mensaje_ignorar = document.querySelector(".desencriptar p:nth-child(3)");
    mensaje_ignorar.textContent = "Ingresa el texto que desees encriptar o desencriptar"
    mensaje_ignorar.style.display = ""
    let copiar = document.querySelector("#desencriptar__button");
    copiar.style.display = "none";
    if(screen.width >= 1024){
      let imagen = document.querySelector(".desencriptar__imagen");
      imagen.style.display = "initial";
    }
  }
}
