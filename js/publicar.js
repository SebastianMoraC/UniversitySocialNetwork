function Img(){
  var reader = new FileReader();
  reader.readAsDataURL(document.getElementById("imagen").files[0]);
  reader.onload=function(e){
    document.getElementById('imagencargada').src = e.target.result;
    console.log(document.getElementById('imagencargada').src)
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
    "autor":autor.value,
    "nombre":nombre.value,
    "enlace":enlace.value,
    "texto":texto.value,
    "opcion":opcionSeleccionada.value,
  }

  $.ajax({
    data: parametros,
    url:'publicacion.php',
    method:'POST',
    responseType:'json',
  }).then(function(data){
    var datos=JSON.parse(data);
  });

}



function comentario(){
  var publicacion = document.getElementById("publicacion");
  alert(publicacion.value);


  var parametros={
    "publicacion":publicacion.value
  }

  $.ajax({
    data: parametros,
    url:'publicacion.php',
    method:'POST',
    responseType:'json',
  }).then(function(data){
    var datos=JSON.parse(data);
  });

}
