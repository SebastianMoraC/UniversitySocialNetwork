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
  var enlace = document.formpublicacion.enlace;
  var texto = document.formpublicacion.texto;
  var lista = document.getElementById("opciones");
  var indiceSeleccionado = lista.selectedIndex;
  var opcionSeleccionada = lista.options[indiceSeleccionado];
  alert('nombre del autor: '+autor.value+
  '\n enlace: '+enlace.value+
  '\n texto: '+texto.value+
  '\n opcion: '+ opcionSeleccionada.value);

}



function comentario(){
  var publicacion = document.getElementById("publicacion");
  alert(publicacion.value)
}
