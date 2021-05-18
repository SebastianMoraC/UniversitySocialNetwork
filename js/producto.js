function Img(){
  var reader = new FileReader();
  reader.readAsDataURL(document.getElementById("imagen").files[0]);
  reader.onload=function(e){
    document.getElementById('imagencargada').src = e.target.result;
    console.log(document.getElementById('imagencargada').src)
  }
}


function crear_producto(){
  var vendedor = document.formproducto.vendedor;
  var precio = document.formproducto.precio;
  var descripcion = document.formproducto.descripcion;
  var ubicacion = document.formproducto.ubicacion;
  alert('vendedor: '+vendedor.value+
  '\n precio: '+ precio.value+
  '\n descripcion: '+ descripcion.value+
  '\n ubicacion: '+ubicacion.value)
}
