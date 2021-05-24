function verradiovalue(){
  var formularioPrincipal = document.form;
  var gmail = document.form.gmail;
  var contraseña = document.form.contraseña;

  var parametros={
    'correo':gmail.value,
    'password':contraseña.value
  };
  $.ajax({
    data: parametros,
    url:'../BACK-PHP/consumirAPI_login.php',
    method:'POST',
    responseType:'json',
  }).then(function(data){
    var datos=JSON.parse(data);// si el usuario no existe en la BD, el id_usuario de la variable datos
                              //arroja="NoExiste"
    if (datos.id_usuario!="NoExiste"){
      guardarusuario(datos.id_usuario)
      alert("id usuario:"+datos.id_usuario);
    }else{
      alert("usuario o contraseña incorrectos");
    }


  });
}


function redirect(){
  window.location.replace("registro.html");
}
