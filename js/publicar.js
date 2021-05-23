const { param } = require("jquery");
var contImg="";
function Img(){
  var reader = new FileReader();
  reader.readAsDataURL(document.getElementById("imagen").files[0]);
  reader.onload=function(e){
    document.getElementById('imagencargada').src = e.target.result;
    contImg=document.getElementById('imagencargada').src;
  }
}


function publicar(){
  var autor = document.formpublicacion.autor;
  var nombre = document.formpublicacion.nombre;
  var enlace = document.formpublicacion.enlace;
  var texto = document.formpublicacion.texto;
  var lista = document.getElementById("opciones");
  var indiceSeleccionado = lista.selectedIndex;
  var opcionSeleccionada = lista.options[indiceSeleccionado];
  alert('nombre del autor: '+autor.value+
  '\n nombre de la publicacion: '+nombre.value+
  '\n enlace: '+enlace.value+
  '\n texto: '+texto.value+
  '\n opcion: '+ opcionSeleccionada.value);

  var parametros={
    "dataImag":contImg,
    "autor":autor.value,
    "nombre":nombre.value,
    "enlace":enlace.value,
    "texto":texto.value,
    "opcion":opcionSeleccionada.value,
  }
  

  $.ajax({
    data: parametros,
    url:'../BACK-PHP/consumirAPI_Foro.php',
    method:'POST',
    responseType:'json',
  }).then(function(data){
    var datos=JSON.parse(data);
    alert(datos.id_post);//Retorna el id de la publicacion que se acaba de crear
  });

}


function comentario(){
  var publicacion = document.getElementById("publicacion");
  alert(publicacion.value);


  var parametros={
    "publicacion_comentario":publicacion.value
  }

  $.ajax({
    data: parametros,
    url:'../BACK-PHP/consumirAPI_Foro..php',
    method:'POST',
    responseType:'json',
  }).then(function(data){
    var datos=JSON.parse(data);
  });

}

