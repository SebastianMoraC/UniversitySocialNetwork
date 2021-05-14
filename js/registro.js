function redirect(){
    window.location.replace("loging.html");
  }

function registrarusuario(){
  var formularioPrincipal = document.form;
  var correo = document.form.correo;
  var contraseña = document.form.contraseña;
  var nombre = document.form.nombre;
  var apellido = document.form.apellido;
  var universidad = document.form.universidad;
  alert("usuario registrado \nnombre: "+nombre.value+
  "\n apellido: "+apellido.value+
  "\n universidad: "+universidad.value+
  "\n correo: "+correo.value+
  "\n contraseña: "+contraseña.value);
}
