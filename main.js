function Checkfiles(){
    var fup = document.getElementById('filename');
    var fileName = fup.value;
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

    if(ext =="jpeg" || ext=="png"){
        return true;
    }
    else{
        return false;
    }
}
function MudaFonte(){
var fonte = document.getElementById('fonte').value;
editor.style.fontFamily = fonte;
}
function MudaTamanho(){
var tamanho = document.getElementById('tamanho').value;
editor.style.fontSize = tamanho;
}
function MudaCor(){
var cor = document.getElementById('cor').value;
editor.style.color = cor;
}
function MudaAlinhamento(){
var alinha = document.getElementById('alinhamento').value;
editor.style.textAlign = alinha;
}
function MudaEstilo(){
var estilo = document.getElementById('estilo').value;
if(estilo == "bold"){
editor.style.fontWeight = estilo;
}
if(estilo == "italic"){
editor.style.fontStyle = estilo;
}
if(estilo == "underline"){
editor.style.textDecoration = estilo;
}
}