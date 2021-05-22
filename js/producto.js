function Img(){
  var reader = new FileReader();
  reader.readAsDataURL(document.getElementById("imagen").files[0]);
  reader.onload=function(e){
    document.getElementById('imagencargada').src = e.target.result;
    console.log(document.getElementById('imagencargada').src)
  }
}


function crear_producto(){
  var tituloventa = document.formproducto.tituloventa;
  var vendedor = document.formproducto.vendedor;
  var precio = document.formproducto.precio;
  var descripcion = document.formproducto.descripcion;
  var ubicacion = document.formproducto.ubicacion;
  var estadoventa = document.formproducto.estadoventa;
  var imag=document.getElementById("imagen").files[0];
  var categorias = document.formproducto.categoria;
  var categoria = "";
  var i;
  for (i = 0; i < categorias.length; i++) {
    if (categorias[i].checked) {
      categoria = categoria + categorias[i].value + ",";
    }
  }
  alert('titulo venta: '+tituloventa.value+
  '\n vendedor: '+vendedor.value+
  '\n precio: '+ precio.value+
  '\n descripcion: '+ descripcion.value+
  '\n ubicacion: '+ubicacion.value+
  '\n estado venta: '+estadoventa.value+
  '\n categorias: '+categoria)

  var parametros={
    "tituloventa":tituloventa.value,
    "vendedor":vendedor.value,
    "precio":precio.value,
    "descripcion":descripcion.value,
    "ubicacion":ubicacion.value,
    "estadoventa":estadoventa.value,
    "imagen":imag,
    "categorias":categoria
  }

  $.ajax({
    data: parametros,
    url:'../BACK-PHP/publicacion.php',
    method:'POST',
    responseType:'json',
  }).then(function(data){
    var datos=JSON.parse(data);
  });
}
