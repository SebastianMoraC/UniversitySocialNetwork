$.ajax({
    url: '../BACK-PHP/consumirAPI_llenasTemas.php',
    method: 'GET',
    responseType: 'json',
}).then(function (data) {
    datosTemas = JSON.parse(data);
    cantidadDatos = []
    nombreTemas = []
    for(var i=0;i<Object.keys(datosTemas).length;i++){
        nombreTemas.push(datosTemas[i].nombre_tema)
        cantidadDatos.push(parseInt(datosTemas[i].id_tema)); //Aquí debe cambiarse el id_tema por la cantidad de datos que le gusta un tema en concreto
      }
      $.ajax({
        url: '../BACK-PHP/consumirAPI_usuario.php?temas_interes',
        method: 'GET',
        responseType: 'json',
    }).then(function (data) {
        console.log(JSON.parse(data)[0].id_tema_interes_usuario);
        console.log(JSON.parse(data)[1].id_tema_interes_usuario);
    });

    var ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nombreTemas,
            datasets: [{
                label: 'Categorias',
                data: cantidadDatos,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });

});

