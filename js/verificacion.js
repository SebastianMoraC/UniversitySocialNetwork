function verradiovalue(){
  var formularioPrincipal = document.form;
  var gmail = document.form.gmail;
  var contraseña = document.form.contraseña;
  var parametros={
    "gmail":document.form.gmail.value,
    "contraseña":document.form.contraseña.value
  }

  $.ajax({
    url:'../BACK-PHP/publicacion.php',
    method:'GET',
    responseType:'json',
  }).then(function(data){
    var usuario=JSON.parse(data);//devuelve los usuario y las contraseña
    if (usuario==gmail.value){//seria mirar todos los usuarios y comparar para ver cual coincide
      guardarusuario(gmail,contraseña) //esto guarda el usuario con la contraseña con la q ingreso en un java por si lo necesita
      reconocerusuario(gmail) //esto mete usuario en una variable en foro para hacer la publicacion
      window.location.replace("foro.html");
    }else{//si no coincide mostrar incorrecto
      alert("incorrecto");
    }
  });
}


function redirect(){
  window.location.replace("registro.html");
}
