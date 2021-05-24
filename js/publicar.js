rellenarpublicaciones();


var contImg = "";
function Img() {
  var reader = new FileReader();
  reader.readAsDataURL(document.getElementById("imagen").files[0]);
  reader.onload = function (e) {
    document.getElementById('imagencargada').src = e.target.result;
    contImg = document.getElementById('imagencargada').src;
  }
}

function rellenarpublicaciones() {

  $.ajax({
    url: '../BACK-PHP/consumirAPI_Foro.php?post',
    method: 'GET',
    responseType: 'json',
  }).then(function (data) {

    var datosTemas = JSON.parse(data);

    var divpublicaciones = document.getElementById("publicaciones");
    console.log(Object.keys(datosTemas).length);
    for (var i = 0; i < Object.keys(datosTemas).length; i++) {
      divpublicaciones.innerHTML = divpublicaciones.innerHTML + `
      <div class="publication row">
          <div class="container col-12">
              <div class="row">
                  <h2 class="publication_name col-8">${datosTemas[i].nombre_post}</h1>
                  <a class="col-2 publication_date" href="${datosTemas[i].enlace_post}">Enlace Asociado</a>
              </div>
              <div class="row">
              <b class="publication_category column">Categoria: ${datosTemas[i].tema_categoria}</b>
              </div>

              <p class="publication_text row">${datosTemas[i].descripcion_post}</p>
              <div class="publication_image row">
                  <img src="${datosTemas[i].ubicacion_foto_post}" class="rounded mx-auto d-block publication_image_item ">
              </div>

              <b class="publication_author row">Autor: ${datosTemas[i].id_usuario}</b>

          </div>
          <div class="publication_ratio col-12">
              <i class="far fa-star fa-2x publication__star" id="starOne" onclick="ratio(this.id);" ></i>
              <i class="far fa-star fa-2x publication__star" id="starTwo" onclick="ratio(this.id);"></i>
              <i class="far fa-star fa-2x publication__star" id="starThree" onclick="ratio(this.id);"></i>
              <i class="far fa-star fa-2x publication__star" id="starFour" onclick="ratio(this.id);"></i>
              <i class="far fa-star fa-2x publication__star" id="starFive" onclick="ratio(this.id);"></i>
          </div>
          <div class="publication_comments container col-12">
              <div class="publication_comments_create row">
                  <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Agregue un comentario" aria-label="Recipient's username" aria-describedby="basic-addon2" id='publicacion'>
                      <div class="input-group-append">
                          <button class="btn btn-outline-secondary" type="button" onclick="comentario();">Comentar</button>
                      </div>
                  </div>

              </div>
              <div class="publication_comments__text row">
                <div class="container comments__comment col-12">
                  <div class="comments__data row">
                    <b class="comment__author col-12">Sebastián Mora Carmona</b>
                    <p class="col-12">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa veritatis voluptate dignissimos. Quisquam eos nulla deserunt, voluptatibus aspernatur consectetur exercitationem vitae mollitia atque ad perspiciatis, id quo. Laudantium, quaerat nesciunt!
                      
                    </p>
                    

                  </div>

                </div>
              </div>
          </div>
          <div>
            <input value="${datosTemas[i].id_post}" type="hidden" readonly="readonly" class="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2" id='id_publicacion'>
          </div>
      </div>`

    }
  });
}


function publicar() {
  var autor = document.formpublicacion.autor;
  var nombre = document.formpublicacion.nombre;
  var enlace = document.formpublicacion.enlace;
  var texto = document.formpublicacion.texto;
  var lista = document.getElementById("opciones");
  var indiceSeleccionado = lista.selectedIndex;
  var opcionSeleccionada = lista.options[indiceSeleccionado];
  var imag = document.getElementById("imagen").files[0];
  var usuario = verusuario();
  alert('nombre del autor: ' + autor.value + usuario +
    '\n nombre de la publicacion: ' + nombre.value +
    '\n enlace: ' + enlace.value +
    '\n texto: ' + texto.value +
    '\n opcion: ' + opcionSeleccionada.value);

  var parametros = {
    "usuario": usuario,
    "dataImag": contImg,
    "autor": autor.value,
    "nombre": nombre.value,
    "enlace": enlace.value,
    "texto": texto.value,
    "opcion": opcionSeleccionada.value
  }


  $.ajax({
    data: parametros,
    url: '../BACK-PHP/consumirAPI_Foro.php',
    method: 'POST',
    responseType: 'json',
  }).then(function (data) {
    console.log(data);
    var datos = JSON.parse(data);
  });

}


function comentario() {
  var id_publicacion = document.getElementById("identificarpublicacion");
  var comentario_publicacion = document.getElementById("comentariopublicacion");
  var usuario = verusuario();

  alert(" id del usuario =" + usuario +
    "\n id publicacion: " + id_publicacion.value +
    "\n comentario: " + comentario_publicacion.value);

  var parametros = {
    "comentario_publicacion": comentario_publicacion,
    "usuario": usuario,
    "idpublicacion": id_publicacion.value
  }

  $.ajax({
    data: parametros,
    url: '../BACK-PHP/consumirAPI_Foro.php?publicacion_comentario',
    method: 'POST',
    responseType: 'json',
  }).then(function (data) {

    var datos = JSON.parse(data);
  });

}
