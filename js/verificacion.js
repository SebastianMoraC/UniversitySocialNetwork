function verradiovalue(){
  var formularioPrincipal = document.form;
  var gmail = document.form.gmail;
  var contraseña = document.form.contraseña;
  var parametros={
    "gmail":document.form.gmail.value,
    "contraseña":document.form.contraseña.value
  }

  $.ajax({
    data: parametros,
    url:'../BACK-PHP/publicacion.php',
    method:'POST',
    responseType:'json',
  }).then(function(data){
    var datos=JSON.parse(data);
  });
}
function redirect(){
  window.location.replace("registro.html");
}
