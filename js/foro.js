function ratio(starPush){
    var usuario = verusuario();
    var idpublicacion = document.getElementById("identificarpublicacion");
    var starOne = document.getElementById("starOne");
    var starTwo = document.getElementById("starTwo");
    var starThree = document.getElementById("starThree");
    var starFour = document.getElementById("starFour");
    var starFive = document.getElementById("starFive");
    var cantidad_estrellas='0';
    switch (starPush) {

        case "starOne":
            starOne.classList.replace("far","fas");
            starTwo.classList.replace("fas","far");
            starThree.classList.replace("fas","far");
            starFour.classList.replace("fas","far");
            starFive.classList.replace("fas","far");
            cantidad_estrellas='1';
            break;
        case "starTwo":
            starOne.classList.replace("far","fas");
            starTwo.classList.replace("far","fas");
            starThree.classList.replace("fas","far");
            starFour.classList.replace("fas","far");
            starFive.classList.replace("fas","far");
            cantidad_estrellas='2';
            break;
        case "starThree":
            starOne.classList.replace("far","fas");
            starTwo.classList.replace("far","fas");
            starThree.classList.replace("far","fas");
            starFour.classList.replace("fas","far");
            starFive.classList.replace("fas","far");
            cantidad_estrellas='3';
            break;

        case "starFour":
            starOne.classList.replace("far","fas");
            starTwo.classList.replace("far","fas");
            starThree.classList.replace("far","fas");
            starFour.classList.replace("far","fas");
            starFive.classList.replace("fas","far");
            cantidad_estrellas='4';
            break;
        case "starFive":
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
      url:'../BACK-PHP/consumirAPI_Foro..php',
      method:'POST',
      responseType:'json',
    }).then(function(data){
      var datos=JSON.parse(data);
    });

}
