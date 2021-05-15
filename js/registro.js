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
        "\n contraseña: "+contraseña.value);
      }else{
          alert("contraseña incorrecta")
      }
    }
  }

}
