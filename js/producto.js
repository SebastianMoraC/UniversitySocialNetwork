

var conImg = "";
function Img(){
  var reader = new FileReader();
  reader.readAsDataURL(document.getElementById("imagen").files[0]);
  reader.onload=function(e){
    document.getElementById('imagencargada').src = e.target.result;
    conImg=document.getElementById('imagencargada').src;
  }
}

function regresar(){
  window.location.replace("productos.html");
}
function crear_producto(){
  var tituloventa = document.publicarproducto.tituloventa;
  var vendedor = document.publicarproducto.vendedor;
  var precio = document.publicarproducto.precio;
  var descripcion = document.publicarproducto.descripcion;
  var ubicacion = document.publicarproducto.ubicacion;
  var estadoventa = document.publicarproducto.estadoventa;
  var imag=document.getElementById("imagen").files[0];


  var parametros={
    "usuario":verusuario(),
    "imgProducto":conImg,
    "tituloventa":tituloventa.value,
    "vendedor":vendedor.value,
    "precio":precio.value,
    "descripcion":descripcion.value,
    "ubicacion":ubicacion.value,
    "estadoventa":estadoventa.value
  }
  console.log(parametros);
  $.ajax({
    data: parametros,
    url:'../BACK-PHP/consumirAPI_Productos.php',
    method:'POST',
    responseType:'json',
  }).then(function(data){
    var datos=JSON.parse(data);// RETORNA EL ID DE LA VENTA QUE SE CREO
  });
  window.location.replace("productos.html");
}


function rellenarproductos() {


  $.ajax({
    url: '../BACK-PHP/consumirAPI_Productos.php?productosAll',//esto hay q cambiarlo por la tabla producto
    method: 'GET',
    responseType: 'json',
  }).then(function (data) {
    var datosProductos = JSON.parse(data);
    var diferentesproductos = document.getElementById("list_productos");
    for (var i = 0; i < Object.keys(datosProductos).length; i++) {
      diferentesproductos.innerHTML =  `
      <div class="row divProductos">
        <div class="col-lg-7 col-sm-12 text-left">
          <h3>${datosProductos[i].titulo_venta}</h3><br>
          <input value='${datosProductos[i].titulo_venta}' type="hidden" readonly="readonly"  id='titulo_venta_${datosProductos[i].id_venta}'>
          <input value="${datosProductos[i].id_venta}" type="hidden" readonly="readonly"  id='id_venta_${datosProductos[i].id_venta}'>
          <b>Nombre vendedor: </b><label>${datosProductos[i].id_usuario}</label><br>
          <b>Precio producto: </b><label>${datosProductos[i].precio_venta}</label><br>
          <b>Descripcion: </b><label>${datosProductos[i].descripcion_venta}</label><br>
          <b>Ubicacion: </b><label>${datosProductos[i].ubicacion_vendedor}</label>
        </div>
        <div class="col-lg-4 col-sm-12">
            <img src="${datosProductos[i].ubicacion_foto_venta}" width="250px">
          </div>
        <div class="col-lg-7 col-sm-12">
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#exampleModalCenter" onclick=llenardatos(${datosProductos[i].id_venta},${datosProductos[i].precio_venta}); >Comprar</button>
          <!--/BUTTON-->
          <!-- Modal -->
          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Comprar Producto</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body" id="formulario_para_comprar">
                  <!--formulario compra-->
                </div>
              </div>
            </div>
          </div>
          <!--/MODAL-->
        </div>
      </div>`+diferentesproductos.innerHTML ;

    }
  });
}

function llenardatos(id,valor){
  var llenar_formulario = document.getElementById("formulario_para_comprar");
  llenar_formulario.innerHTML=`
  <form name="formproducto_${id}">
    <label class="col-4" >Lugar de Envio</label><input type="text"
      class="mx-auto inputText col-8" value="" id="lugar_envio_pedido_${id}">
    <label class="col-4"> Cantidad</label>
    <select class="custom-select custom-select-sm" id="cantidad_pedido_${id}">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
    <label class="col-12">Precio</label>
    <input type="text" class="contact-form__input form-control" id="valor_pedido_${id}" value="${valor}" disabled>
  </form>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
    <button type="button" class="btn btn-success"  onclick="comprarProducto(${id});">Comprar</button>
  </div>
  `
}


function comprarProducto(id) {
  var titulo_venta =document.getElementById("titulo_venta_"+id);
  var lugar_envio_pedido = document.getElementById("lugar_envio_pedido_"+id);
  var lista = document.getElementById("cantidad_pedido_"+id);
  var indiceSeleccionado = lista.selectedIndex;
  var opcionSeleccionada = lista.options[indiceSeleccionado];
  var precio = document.getElementById("valor_pedido_"+id);
  var usuario = verusuario();
  var idventa =id;
  var f = new Date();
  var fecha= f.getFullYear()+ "-"+ (f.getMonth() +1) + "-" +f.getDate()  ;
  alert('titulo venta: '+titulo_venta.value+
  '\n id usuario: '+usuario+
  '\n id venta: '+id+
  '\n cantidad pedido: '+opcionSeleccionada.value+
  '\n fecha venta: '+fecha+
  '\n valor Total '+parseFloat(precio.value)*parseFloat(opcionSeleccionada.value))
  var parametros = {
    "usuario":usuario,
    "id_venta":id,
    "lugar_envio_pedido": lugar_envio_pedido.value,
    "cantidad_de_productos": opcionSeleccionada.value,
    "fecha":fecha,
    "precio": parseFloat(precio.value)*parseFloat(opcionSeleccionada.value)
  }

  //este ayax seria para enviar el pedido a la base de datos, para registrar el pedido en la BD
  $.ajax({
    data: parametros,
    url: '../BACK-PHP/consumirAPI_Productos.php',
    method: 'POST',
    responseType: 'json',
  }).then(function (data) {
    console.log(data);
    var datos = JSON.parse(data);
  });
  

}


rellenarproductos();
