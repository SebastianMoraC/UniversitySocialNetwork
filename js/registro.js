function redirect(){
    window.location.replace("loging.html");
  }

function registrarusuario(){
  var correo = document.form.correo;
  var contraseña = document.form.contraseña;
  var valcontraseña = document.form.valcontraseña;
  var nombre = document.form.nombre;
  var apellido = document.form.apellido;
  var universidad = document.form.universidad;
  var temas = document.form.tema
  var temas_interes = "";
  var i;
  for (i = 0; i < temas.length; i++) {
    if (temas[i].checked) {
      temas_interes = temas_interes + temas[i].value + ",";
    }
  }
  re=/^([\da-z_\.-]+)@utp.edu.co/
  if (correo.value=='' || contraseña.value=='' || valcontraseña.value=='' || nombre.value=='' || apellido.value=='' || universidad.value==''){
    alert("falto un campo")
  }else{
    if (!re.exec(correo.value)){
      alert("correo no valido")
    }else{
      if (contraseña.value==valcontraseña.value){

        alert("usuario registrado \nnombre: "+nombre.value+
        "\n apellido: "+apellido.value+
        "\n universidad: "+universidad.value+
        "\n correo: "+correo.value+
        "\n contraseña: "+contraseña.value+
        "\n tema seleccionado: "+temas_interes);


        var parametros={
          "nombre":nombre.value,
          "apellido":apellido.value,
          "universidad":universidad.value,
          "correo":correo.value,
          "contraseña":contraseña.value,
          "temas_seleccionados":temas_interes
        }

        $.ajax({
          data: parametros,
          url:'conexion.php',
          method:'POST',
          responseType:'json',
        }).then(function(data){
          var datos=JSON.parse(data);
        });


      }else{
          alert("contraseña incorrecta")
      }
    }
  }

}

function rellenarcampos(){
  $.ajax({
    url:'conexion.php?publicacion',
    method:'GET',
    responseType:'json',
  }).then(function(data){
    var contenedor=document.getElementById("tipos_de_temas");
    contenedor.innerHTML= datos +contenedor.innerHTML;
  });
}
