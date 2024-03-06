var botaoEncriptar = document.querySelector(".btn-encriptar");
var botaoDesencriptar = document.querySelector(".btn-desencriptar");
var boneco = document.querySelector(".container-boneto");
var container = document.querySelector(".container-paragrafo");
var resultado = document.querySelector(".texto-resultado");

botaoEncriptar.onclick = encriptar;
botaoDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdiante();
    var caixatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(caixatexto);
}

function desencriptar(){
    ocultarAdiante();
    var caixatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(caixatexto);
}

function recuperarTexto(){
    var caixatexto = document.querySelector(".container-texto");
    return caixatexto.value;
}

function ocultarAdiante(){
    boneco.classList.add("ocultar");
    container.classList.add("ocultar");
}

function encriptarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for (var i = 0; i < texto.lenght; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ajous"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "eue"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "onter"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufet"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for (var i = 0; i < texto.lenght; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+4;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+2;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+4;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", copiar = () => {
    var conteudo = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("Oi");    
    })