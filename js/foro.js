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
    alert(" id del usuario ="+usuario+
    "\n id publicacion: "+idpublicacion.value+
    "\n cantidad de estrellas: "+cantidad_estrellas);

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
        console.log(data);
      var datos=JSON.parse(data);
    });

}



function cargarComentarios(){


    $.ajax({
        url:'../BACK-PHP/consumirAPI_Foro.php?reseniasPost= 1'/* remplaza el "1" por la variable con el id de la publicacion que quiere traer sus comentarios*/,
        method:'GET',
        responseType:'json',
      }).then(function(data){
          
          var datos=JSON.parse(data);
          console.log(datos); //Aca estan los comentarios referentes a el id de la publicaon "1"!!!!! 
      });

}
cargarComentarios();// ACA LLAMO LA FUNCION PARA CARGAR LOS COMENTRIOS