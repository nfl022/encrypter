
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
function syntaxDecript (mensajeFinal) {
   let mensajeDesencriptado   =  mensajeFinal
      .replace (/ufat/g, "u")
      .replace (/ober/g, "o")
      .replace (/imes/g, "i")
      .replace (/ai/g, "a")
      .replace (/enter/g, "e")
      return mensajeDesencriptado;
}
function encriptar() {
   const inputTextarea = document.getElementById("textoUsuario");
   const outputTextarea = document.querySelector("#output");
   
   if (inputTextarea.value !== "") {
       const mensajeFinal = syntaxEncript(inputTextarea.value);
       outputTextarea.value = mensajeFinal;
   } else {
       outputTextarea.value = "";
   }
   toggleCopiarButton();
   autoExpand(inputTextarea);
   autoExpand(outputTextarea); 
}
function desencriptar () {
   if (mensajeUsuario != '') {  
      mensajeUsuario = document.getElementById("textoUsuario").value;
      mensajeFinal = syntaxDecript(mensajeUsuario)
      document.querySelector("#output").value = mensajeFinal
      toggleCopiarButton();
      autoExpand("output")
   }else{
      return ""; 
   }
   toggleCopiarButton();
   autoExpand(document.querySelector("#output"));
   autoExpand(document.querySelector("#textoUsuario"));
} 
   document.querySelector("#textoUsuario").addEventListener("input", function() {
      encriptar();
});
document.getElementById("textoUsuario").addEventListener("input", function(event) {
   const inputTextarea = event.target;
   inputField.value = inputField.value.replace(/[^a-z\s]/g, '');
});
     
function toggleCopiarButton() {
   const botonKopiar = document.getElementById("copiar");
   const outputValue = document.querySelector("#output").value.trim();
   
   botonKopiar.style.display = outputValue ? "block" : "none";
}
   
   function swap() {

      let inputTextarea = document.getElementById("textoUsuario").value;
      let outputTextarea = document.getElementById("output").value;
      if (!isSwapped) {
         document.getElementById("textoUsuario").value = syntaxEncript(inputTextarea)
         document.getElementById("output").value = syntaxDecript(outputTextarea);    
       } else {
         inputTextarea = syntaxDecript(outputTextarea);
         document.getElementById("textoUsuario").value = inputTextarea;
        outputTextarea=syntaxEncript(inputTextarea);
         document.getElementById("output").value = outputTextarea;  
       }
      isSwapped = !isSwapped;
  }
   function limpiarTexto(){
       const inputTextarea = document.querySelector("#textoUsuario")
       const outputTextarea = document.querySelector("#output")
       inputTextarea.value = "";
      outputTextarea.value = "";

       contadorPalabras();
       toggleCopiarButton();

       autoExpand(inputTextarea);  
       autoExpand(outputTextarea);
      
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
         function autoExpand(textarea) {
            if (!textarea || !textarea.style) {
               return;
           }
            if (textarea.value.trim() === "") {
               textarea.style.height = "280px";
           } else {
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + 'px';
           }
         }

         document.getElementById("textoUsuario").addEventListener('input', contadorPalabras);

        document.getElementById("textoUsuario").addEventListener("input", function (event) {
            if (event.target.tagName.toLowerCase() === 'textarea') {
                autoExpand(this);
                encriptar();
            }
        }); 
        
toggleCopiarButton();





