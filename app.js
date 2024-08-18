
let palabraNormal = ""
let palabraEncriptada = ""
let mensajeUsuario = ""
let mensajeFinal =  ""
let isSwapped = false;
let contador = ""


function syntaxEncript(palabraEncriptada){
    palabraNormal = palabraEncriptada
    .replace (/e/g, "enter")
    .replace (/i/g, "imes")
    .replace (/o/g, "ober")
    .replace (/u/g, "ufat")
    .replace (/a/g, "ai")
    return palabraNormal;
}
function toggleCopiarButton() {
   const botonKopiar = document.getElementById("copiar");
   const outputValue = document.querySelector("#output").value.trim();
   
   botonKopiar.style.display = outputValue ? "block" : "none";
}

function encriptar () {
       mensajeUsuario = document.getElementById("textoUsuario").value;

     if (mensajeUsuario !== ""){
        mensajeFinal = syntaxEncript(mensajeUsuario);
        document.querySelector("#output").value = mensajeFinal
        toggleCopiarButton();
        return mensajeFinal;
     } else {
        document.querySelector("#output").value = ""   
           }
           toggleCopiarButton();
   }
   document.querySelector("#textoUsuario").addEventListener("input", function() {
      encriptar();
});
 
   function syntaxDecript (mensajeFinal) {
      let mensajeDesencriptado   =  mensajeFinal
         .replace (/ufat/g, "u")
         .replace (/ober/g, "o")
         .replace (/imes/g, "i")
         .replace (/ai/g, "a")
         .replace (/enter/g, "e")
         return mensajeDesencriptado;
   }
        
   function desencriptar () {
      if (mensajeUsuario != '') {  
         mensajeUsuario = document.getElementById("textoUsuario").value;
         mensajeFinal = syntaxDecript(mensajeUsuario)
            
         document.querySelector("#output").value = mensajeFinal
         toggleCopiarButton();
      }else{
         return ""; 
      }
   } 
   
   function swap() {

      let mensajeUsuario = document.getElementById("textoUsuario").value;
      let mensajeFinal = document.getElementById("output").value;
  
      if (!isSwapped) {
         document.getElementById("textoUsuario").value = syntaxEncript(mensajeUsuario)
         document.getElementById("output").value = mensajeFinal;
           
       } else {
         mensajeUsuario = syntaxDecript(mensajeFinal);
         document.getElementById("textoUsuario").value = mensajeUsuario;
         mensajeFinal=syntaxEncript(mensajeUsuario);
         document.getElementById("output").value = mensajeFinal;
          
       }
   
      isSwapped = !isSwapped;
  }
   function limpiarTexto(){
       document.querySelector("#textoUsuario").value = "";
       document.querySelector("#output").value = "";
       contadorPalabras();
       toggleCopiarButton();  
      
   }

   async function copiarTexto(){
      let copiar = document.querySelector("#output").value;
         try {
            await navigator.clipboard.writeText(copiar);
               alert("Text copied to clipboard");
            } catch (err) {
               console.error("Failed to copy", err)
            };
            toggleCopiarButton();
            
         }

         function contadorPalabras (){
            let maximoLetras = 1500
            let textoUsuario =(document.getElementById("textoUsuario").value);

            const letras = textoUsuario.length;

            if (textoUsuario.trim() === "") {
               document.getElementById("contador").value = `0/${maximoLetras}`;
            }else if (letras <= maximoLetras){
               document.getElementById("contador").value = `${letras}/${maximoLetras}`
           
            } else {
          
            alert("Numero maximo de palabras alcanzado");

            document.getElementById("textoUsuario").value = textoUsuario.slice(0, maximoLetras);
            document.getElementById("contador").value = `${maximoLetras}/${maximoLetras} words used`
            }
      
         }
            document.getElementById("textoUsuario").addEventListener('input', contadorPalabras);

toggleCopiarButton();





