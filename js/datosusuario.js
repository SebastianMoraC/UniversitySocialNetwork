function guardarusuario(loging){
  localStorage.setItem("usuario",loging);
}

function verusuario(){
  return localStorage.getItem("usuario");
}
