
function showGeneral(){
  rellenarpublicaciones();
}
function reload(){
  window.location.replace("foro.html");
}
function regresar() {
  window.location.replace("foro.html");
}


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
  document.getElementById("publicaciones").innerHTML="";
  $.ajax({
    url: '../BACK-PHP/consumirAPI_Foro.php?post',
    method: 'GET',
    responseType: 'json',
  }).then(function (data) {

    var datosTemas = JSON.parse(data);
    var divpublicaciones = document.getElementById("publicaciones");
    for (var i = 0; i < Object.keys(datosTemas).length; i++) {
      divpublicaciones.innerHTML = `
      <div class="publication row">
          <div class="container col-12">
              <div class="row">
                  <h2 class="publication_name col-11">${datosTemas[i].nombre_post}</h1>
                  <button type="button" class="btn mx-auto" onclick="reportarPost(${datosTemas[i].id_post})"><i class="fas fa-exclamation-triangle" style="color:red"></i></button>
                  <a class="col-2 publication_date" href="${datosTemas[i].enlace_post}" target="_blank">Enlace Asociado</a>
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
              <i class="far fa-star fa-2x publication__star" id="starOne_${datosTemas[i].id_post}" onclick="ratio(this.id,${datosTemas[i].id_post});" ></i>
              <i class="far fa-star fa-2x publication__star" id="starTwo_${datosTemas[i].id_post}" onclick="ratio(this.id,${datosTemas[i].id_post});"></i>
              <i class="far fa-star fa-2x publication__star" id="starThree_${datosTemas[i].id_post}" onclick="ratio(this.id,${datosTemas[i].id_post});"></i>
              <i class="far fa-star fa-2x publication__star" id="starFour_${datosTemas[i].id_post}" onclick="ratio(this.id,${datosTemas[i].id_post});"></i>
              <i class="far fa-star fa-2x publication__star" id="starFive_${datosTemas[i].id_post}" onclick="ratio(this.id,${datosTemas[i].id_post});"></i>
          </div>
          <div class="publication_comments container col-12">
              <div class="publication_comments_create row">
                  <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Agregue un comentario" aria-label="Recipient's username" aria-describedby="basic-addon2" id='comentario_publicacion_${datosTemas[i].id_post}'>
                      <div class="input-group-append">
                          <button class="btn btn-outline-secondary" type="button" onclick="comentario(${datosTemas[i].id_post});">Comentar</button>
                      </div>
                  </div>

              </div>
              <div class="publication_comments__text row">
                <div class="container comments__comment col-12">
                  <div class="comments__data row" id="cargar_comentarios_${datosTemas[i].id_post}">

                  </div>

                </div>
              </div>
          </div>
          <div>
            <input value="${datosTemas[i].id_post}" type="hidden" readonly="readonly" class="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2" id='id_publicacion_${datosTemas[i].id_post}'>
          </div>
      </div>`+divpublicaciones.innerHTML;

    }
  });
  cargarComentarios();
}

function reportarPost(id){
  var parametros = {
    "usuario": verusuario(),
    "id_post_repotar": id
  }
  $.ajax({
    data: parametros,
    url: '../BACK-PHP/consumirAPI_Foro.php',
    method: 'POST',
    responseType: 'json',
  }).then(function (data) {
    console.log(data);
    var datos=JSON.parse(data);
    alert("Hemos recibido su Reporte con id= "+datos.id_reporte);
  });



}

function activateIA() {
  userInSession = verusuario();
  var divdelete = document.getElementById("publicaciones");
  document.getElementById("publicaciones").innerHTML="";



  
  $.ajax({
    url: '../BACK-PHP/consumirAPI_Foro.php?post',
    method: 'GET',
    responseType: 'json',
  }).then(function (data) {

    var publicaciones = JSON.parse(data);
    var publicationsToShow = []

    $.ajax({
      url: '../BACK-PHP/consumirAPI_Usuario.php?usuarios_datos',
      method: 'GET',
      responseType: 'json',
    }).then(function (data) {
      users = JSON.parse(data);
      for (var i = 0; i < Object.keys(users).length; i++) {
        if (users[i].id_usuario == userInSession) {
          temaUserInSession = users[i].id_tema_interes_usuario;
        }
      }
      for (var i = 0; i < Object.keys(publicaciones).length; i++) {
        for (var k = 0; k < temaUserInSession.length; k++) {
          if (publicaciones[i].tema_categoria === temaUserInSession[k]) {
            publicationsToShow.push(publicaciones[i]);

          }
        }
      }
      
      var divpublicaciones = document.getElementById("publicaciones");
      for (var i = 0; i < Object.keys(publicationsToShow).length; i++) {
        console.log("hello")
        divpublicaciones.innerHTML = `
      <div class="publication row">
          <div class="container col-12">
              <div class="row">
                  <h2 class="publication_name col-8">${publicationsToShow[i].nombre_post}</h1>
                  <button type="button" class="btn mx-auto col-1" onclick="reportarPost(${publicationsToShow[i].id_post})"><i class="fas fa-exclamation-triangle" style="color:red"></i></button>
                  <a class="col-2 publication_date" href="${publicationsToShow[i].enlace_post}" target="_blank">Enlace Asociado</a>
              </div>
              <div class="row">
              <b class="publication_category column">Categoria: ${publicationsToShow[i].tema_categoria}</b>
              </div>

              <p class="publication_text row">${publicationsToShow[i].descripcion_post}</p>
              <div class="publication_image row">
                  <img src="${publicationsToShow[i].ubicacion_foto_post}" class="rounded mx-auto d-block publication_image_item ">
              </div>

              <b class="publication_author row">Autor: ${publicationsToShow[i].id_usuario}</b>

          </div>
          <div class="publication_ratio col-12">
              <i class="far fa-star fa-2x publication__star" id="starOne_${publicationsToShow[i].id_post}" onclick="ratio(this.id,${publicationsToShow[i].id_post});" ></i>
              <i class="far fa-star fa-2x publication__star" id="starTwo_${publicationsToShow[i].id_post}" onclick="ratio(this.id,${publicationsToShow[i].id_post});"></i>
              <i class="far fa-star fa-2x publication__star" id="starThree_${publicationsToShow[i].id_post}" onclick="ratio(this.id,${publicationsToShow[i].id_post});"></i>
              <i class="far fa-star fa-2x publication__star" id="starFour_${publicationsToShow[i].id_post}" onclick="ratio(this.id,${publicationsToShow[i].id_post});"></i>
              <i class="far fa-star fa-2x publication__star" id="starFive_${publicationsToShow[i].id_post}" onclick="ratio(this.id,${publicationsToShow[i].id_post});"></i>
          </div>
          <div class="publication_comments container col-12">
              <div class="publication_comments_create row">
                  <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Agregue un comentario" aria-label="Recipient's username" aria-describedby="basic-addon2" id='comentario_publicacion_${publicationsToShow[i].id_post}'>
                      <div class="input-group-append">
                          <button class="btn btn-outline-secondary" type="button" onclick="comentario(${publicationsToShow[i].id_post});">Comentar</button>
                      </div>
                  </div>

              </div>
              <div class="publication_comments__text row">
                <div class="container comments__comment col-12">
                  <div class="comments__data row" id="cargar_comentarios_${publicationsToShow[i].id_post}">

                  </div>

                </div>
              </div>
          </div>
          <div>
            <input value="${publicationsToShow[i].id_post}" type="hidden" readonly="readonly" class="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2" id='id_publicacion_${publicationsToShow[i].id_post}'>
          </div>
      </div>`+divpublicaciones.innerHTML;
      }
  });
  });
  cargarComentarios();
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
    var datos = JSON.parse(data);
  });
  window.location.replace("foro.html");
}


function comentario(id) {
  var id_publicacion = document.getElementById("id_publicacion_" + id);
  var comentario = document.getElementById("comentario_publicacion_" + id);
  var usuario = verusuario();



  var parametros = {
    "comentario_publicacion": comentario.value,
    "usuario": usuario,
    "idpublicacion": id_publicacion.value
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
  window.location.replace("foro.html");
}
