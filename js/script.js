var btnEncriptar = document.querySelector("#Encriptar");
var btnDesencriptar = document.querySelector("#Desencriptar");
var btnCopiar = document.querySelector("#Copiar")
var boxMensajes = document.querySelector("#mensajeEncriptadoTexto")

//Funciones
function encriptar (){
    var texto = document.querySelector("#texto").value.toLowerCase();

    if (texto != '') {
        var textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        boxMensajes.innerHTML = textoEncriptado;
        document.querySelector("#texto").value = "";
        document.querySelector("#mensajeError").classList.add('ocultar');
        document.querySelector(".box-text").classList.remove('ocultar');
    }  else {
        document.querySelector(".box-text").classList.add('ocultar');
        document.querySelector("#mensajeError").classList.remove('ocultar');
}
}

function desencriptar (){
    var texto = document.querySelector("#texto").value.toLowerCase();
    
    if (texto != '') {
        var textoDesencriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        boxMensajes.innerHTML = textoDesencriptado;
        document.querySelector("#texto").value = "";
        document.querySelector("#mensajeError").classList.add('ocultar');
        document.querySelector(".box-text").classList.remove('ocultar');
    } else {
        document.querySelector(".box-text").classList.add('ocultar');
        document.querySelector("#mensajeError").classList.remove('ocultar');
    }
}

function copiar () {
    navigator.clipboard.writeText(boxMensajes.innerText)
}



//botones
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;


