function clicou(){
    alert('Seu cadastro foi realizado com sucesso, em breve entraremos em contato com você ');
}

function login(){
    window.location.href="LOGIN/index.html"
}
function Cursos(){
    window.location.href="../Cursos/index.html"
}
function soulCode(){
    window.location.href="https://soulcodeacademy.org"
}
function Video(){
    window.location.href="../Video/index.html"
}

function insta(){
   window.location.href="https://www.instagram.com/jovensalesbc21/"
}

   let name = document.getElementsByClassName('nome_completo');
   
var nomeMarca = "lucio"
const Marca = document.getElementById("name");
var texto = document.createTextNode(`Olá, ${nomeMarca}`);
Marca.appendChild(texto);
var body = document.body;
body.appendChild(Marca);

var t = document.getElementsByClassName('content')
//var x = document.createElement('iFrame');
var x = document.querySelector('iFrame'); 
x.setAttribute("width", "860"); //adicionar o atributo id com o valor azul
x.setAttribute("height", "515");
x.setAttribute("src", "https://www.youtube.com/embed/iZ1ucWosOww"); //adicionar o atributo class com o valor bloco
x.setAttribute("title", "YouTube video player"); 
x.setAttribute("frameborder", "0"); 
x.setAttribute("allow", "accelerometer", " autoplay", "clipboard-write", "encrypted-media", "gyroscope", "picture-in-picture"); 
//t.appendChild(x);
//.innerHTML = x;



//body.appendChild(x);



