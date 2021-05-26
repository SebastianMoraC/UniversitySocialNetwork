window.onload = function(){showGeneral()};
function ratio(starPush,id){
    var usuario = verusuario();
    var idpublicacion = document.getElementById("id_publicacion_"+id);
    var starOne = document.getElementById("starOne_"+id);
    var starTwo = document.getElementById("starTwo_"+id);
    var starThree = document.getElementById("starThree_"+id);
    var starFour = document.getElementById("starFour_"+id);
    var starFive = document.getElementById("starFive_"+id);
    var cantidad_estrellas='0';
    switch (starPush) {

        case "starOne_"+id:
            starOne.classList.replace("far","fas");
            starTwo.classList.replace("fas","far");
            starThree.classList.replace("fas","far");
            starFour.classList.replace("fas","far");
            starFive.classList.replace("fas","far");
            cantidad_estrellas='1';
            break;
        case "starTwo_"+id:
            starOne.classList.replace("far","fas");
            starTwo.classList.replace("far","fas");
            starThree.classList.replace("fas","far");
            starFour.classList.replace("fas","far");
            starFive.classList.replace("fas","far");
            cantidad_estrellas='2';
            break;
        case "starThree_"+id:
            starOne.classList.replace("far","fas");
            starTwo.classList.replace("far","fas");
            starThree.classList.replace("far","fas");
            starFour.classList.replace("fas","far");
            starFive.classList.replace("fas","far");
            cantidad_estrellas='3';
            break;

        case "starFour_"+id:
            starOne.classList.replace("far","fas");
            starTwo.classList.replace("far","fas");
            starThree.classList.replace("far","fas");
            starFour.classList.replace("far","fas");
            starFive.classList.replace("fas","far");
            cantidad_estrellas='4';
            break;
        case "starFive_"+id:
            starOne.classList.replace("far","fas");
            starTwo.classList.replace("far","fas");
            starThree.classList.replace("far","fas");
            starFour.classList.replace("far","fas");
            starFive.classList.replace("far","fas");
            cantidad_estrellas='5';
            break;
        default:
            break;
    }


    var parametros={
      "cantidad_estrellas":cantidad_estrellas,
      "usuario":usuario,
      "idpublicacion":idpublicacion.value
    }

    $.ajax({
      data: parametros,
      url:'../BACK-PHP/consumirAPI_Foro.php',
      method:'POST',
      responseType:'json',
    }).then(function(data){

      var datos=JSON.parse(data);
    });

}


function cargarComentarios(){
  
  $.ajax({
    url: '../BACK-PHP/consumirAPI_Foro.php?post',//aqui va a la tabla post y se trae la tabla post
    method: 'GET',
    responseType: 'json',
  }).then(function (data) {

    var datosTemas = JSON.parse(data);

    for (var i = 0; i < Object.keys(datosTemas).length; i++) {
      $.ajax({
          url:'../BACK-PHP/consumirAPI_Foro.php?reseniasPost='+datosTemas[i].id_post/* remplaza el "1" por la variable con el id de la publicacion que quiere traer sus comentarios*/,
          method:'GET',
          responseType:'json',
        }).then(function(data){

            var datos=JSON.parse(data);
            var divpublicaciones =""
            
            datos.forEach(element => {
                divpublicaciones= document.getElementById("cargar_comentarios_"+element.id_post);
                $.ajax({
                  url:'../BACK-PHP/consumirAPI_Usuario.php?id_usuario_nombre='+element.id_usuario,
                  method:'GET',
                  responseType:'json',
                }).then(function(data1){
                  
                    var datos2=JSON.parse(data1);
                    divpublicaciones.innerHTML = divpublicaciones.innerHTML + `
                    <b class="comment__author col-12">${datos2.nombre_usuario+" "+datos2.apellido_usuario}</b>
                    <p class="col-12">
                      ${element.resenia}
                    </p>`
                });
            });
            return (datos);
        });
      }
    });

}



cargarComentarios();// ACA LLAMO LA FUNCION PARA CARGAR LOS COMENTRIOS
