function comprarProducto() {

}

var conImg = "";
function Img(){
  var reader = new FileReader();
  reader.readAsDataURL(document.getElementById("imagen").files[0]);
  reader.onload=function(e){
    document.getElementById('imagencargada').src = e.target.result;
    conImg=document.getElementById('imagencargada').src;
  }
}


function crear_producto(){
  var tituloventa = document.publicarproducto.tituloventa;
  var vendedor = document.publicarproducto.vendedor;
  var precio = document.publicarproducto.precio;
  var descripcion = document.publicarproducto.descripcion;
  var ubicacion = document.publicarproducto.ubicacion;
  var estadoventa = document.publicarproducto.estadoventa;
  var imag=document.getElementById("imagen").files[0];


  alert('titulo venta: '+tituloventa.value+
  '\n vendedor: '+vendedor.value+
  '\n precio: '+ precio.value+
  '\n descripcion: '+ descripcion.value+
  '\n ubicacion: '+ubicacion.value+
  '\n estado venta: '+estadoventa.value)

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
          <button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#exampleModalCenter">Comprar</button>
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
                <div class="modal-body">
                  <form name="formproducto">
                    <label class="col-4">Lugar de Envio</label><input type="text"
                      class="mx-auto inputText col-8" value="" name="tituloventa">
                    <label class="col-4"> Cantidad</label>
                    <select class="custom-select custom-select-sm">

                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="1">4</option>
                      <option value="2">5</option>
                      <option value="3">6</option>
                    </select>

                    <label class="col-12">Precio</label>
                    <input type="text" class="contact-form__input form-control" value="5.000" disabled>

                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-success" data-dismiss="modal" onclick="comprarProducto();">Comprar</button>
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
rellenarproductos();