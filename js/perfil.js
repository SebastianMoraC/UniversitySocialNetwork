userInSession = verusuario();



$.ajax({
    url: '../BACK-PHP/consumirAPI_UsuarioDatos.php?usuarios_datos',
    method: 'GET',
    responseType: 'json',
}).then(function (data) {
    users = JSON.parse(data);
    usersInterest = []
    for (var i = 0; i < Object.keys(users).length; i++) {
        if (users[i].id_usuario == userInSession) {
            nameUserInSession = users[i].nombre_usuario +" "+ users[i].apellido_usuario;
            universityUserInSession = users[i].universidad_usuario;
            correoUserInSession = users[i].correo_usuario;   
            temaUserInSession = users[i].id_tema_interes_usuario;        
        }
    }
    console.log(nameUserInSession);
    console.log(universityUserInSession);
    console.log(correoUserInSession);
    var nameHtml = document.getElementById("name");
    var universityHtml = document.getElementById("university");
    var correoHtml = document.getElementById("correo");
    nameHtml.value = nameUserInSession;
    universityHtml.value = universityUserInSession;
    correoHtml.value = correoUserInSession;
    $.ajax({
        url: '../BACK-PHP/consumirAPI_llenasTemas.php',
        method: 'GET',
        responseType: 'json',
    }).then(function (data) {
        datosTemas = JSON.parse(data);
        nombreTemas = []
        for (var i = 0; i < temaUserInSession.length; i++) {
            for (var k = 0; k < temaUserInSession.length; k++) {
                if (datosTemas[k].id_tema == temaUserInSession[i]) {
                    nombreTemas.push(datosTemas[k].nombre_tema);        
            
                }
            }    
        }
        var temasHtml = document.getElementById("temas");
        temasHtml.value = "Temas de Interes: "+nombreTemas;
    });
});
    
    
    