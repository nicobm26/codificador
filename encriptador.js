function encriptar(word){
  let word_encriptada = "";
  for(let i =0; i<word.length; i++){
      console.log(word[i])
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
  return word;
}


function desencriptar(palabra_encripada){
  let palabra = palabra_encripada.replace(/ai/g, 'a');
  palabra = palabra.replace( /enter/g , 'e');
  palabra = palabra.replace( /imes/g , 'i');
  palabra =  palabra.replace( /ober/g , 'o');
  palabra = palabra.replace( /ufat/g , 'u');
  console.log(palabra)
  return palabra;
}