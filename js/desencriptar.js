let botonDesencriptar = document.querySelector("#botonDesencriptar");
botonDesencriptar.addEventListener("click", ()=> desencriptar(texto.value));

function desencriptar(palabraCifrada){
  let palabra = palabraCifrada.replace(/ai/g,"a");
  palabra = palabra.replace(/enter/g, "e");
  palabra = palabra.replace(/imes/g, "i");
  palabra = palabra.replace(/ober/g, "o");
  palabra = palabra.replace(/ufat/g, "u");
  mostrar(palabra);
}