verPedido();

function verPedido() {
    $.ajax({
      url: '../BACK-PHP/consumirAPI_Productos.php?pedidosAll='+verusuario(),//esto hay q cambiarlo por la tabla pedido
      method: 'GET',
      responseType: 'json',
    }).then(function (data) {
      console.log(data,verusuario());
      var datosPedidos = JSON.parse(data);
      var diferentespedidos = document.getElementById("lista_pedidos");
      for (var i = 0; i < Object.keys(datosPedidos).length; i++) {
        diferentespedidos.innerHTML =  `
        <div class="pedidos-pedido row">
            <div class="pedido_information col-8 ">
                <h1 class="text-left pedido_tittle">${datosPedidos[i].titulo_venta}</h1>
                <label for="dataPedido" class="pedido_data pedido_data__label">Numero Usuario Vendedor:</label>
                <p class="pedido_data">${datosPedidos[i].id_usuario}</p>
                <br>
                <label for="dataPedido" class="pedido_data pedido_data__label">Producto numero:</label>
                <p class="pedido_data">${datosPedidos[i].id_venta}</p>
                <br>
                <label for="dataPedido" class="pedido_data pedido_data__label">Cantidad comprada:</label>
                <p class="pedido_data">${datosPedidos[i].cantidad_pedido}</p>
                <br>
                <label for="dataPedido" class="pedido_data pedido_data__label">Fecha:</label>
                <p class="pedido_data">${datosPedidos[i].fecha_pedido}</p>
                <br>
                <label for="dataPedido" class="pedido_data pedido_data__label">Valor total:</label>
                <p class="pedido_data">${datosPedidos[i].valor_Total}</p>
                <br>
            </div>
            <div class="col-4">
                <img src="${datosPedidos[i].ubicacion_foto_venta}" class="rounded mx-auto d-block pedido_image img-fluid">
            </div>
        </div>`+ diferentespedidos.innerHTML
      }
      });
  }
