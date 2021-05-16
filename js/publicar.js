
function publicar(){
  var autor = document.formpublicacion.autor;
  var enlace = document.formpublicacion.enlace;
  var texto = document.formpublicacion.texto;
  var lista = document.getElementById("opciones");
  var indiceSeleccionado = lista.selectedIndex;
  var opcionSeleccionada = lista.options[indiceSeleccionado];
  const imageUploader = document.getElementById("file").files[0];/*esto hay q revisarlo*/
  alert('nombre del autor: '+autor.value+
  '\n enlace: '+enlace.value+
  '\n texto: '+texto.value+
  '\n opcion: '+ opcionSeleccionada.value+
  '\n imagen: '+ imageUploader)
}


function comentario(){
  var publicacion = document.getElementById("publicacion");
  alert(publicacion.value)
}
