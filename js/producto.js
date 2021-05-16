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
