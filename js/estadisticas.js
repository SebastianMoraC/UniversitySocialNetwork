$.ajax({
    url: '../BACK-PHP/consumirAPI_llenasTemas.php',
    method: 'GET',
    responseType: 'json',
}).then(function (data) {
    datosTemas = JSON.parse(data);
    cantidadDatos = []
    nombreTemas = []
    for (var i = 0; i < Object.keys(datosTemas).length; i++) {
        nombreTemas.push(datosTemas[i].nombre_tema);
    }
    $.ajax({
        url: '../BACK-PHP/consumirAPI_Usuario.php?temas_interes',
        method: 'GET',
        responseType: 'json',
    }).then(function (data) {
        users = JSON.parse(data);
        usersInterest = []
        for (var i = 0; i < Object.keys(users).length; i++) {
            if (users[i].id_tema_interes_usuario.length > 1) {
                for (var k = 0; k < Object.keys(users[i].id_tema_interes_usuario).length; k++) {
                    if (users[i].id_tema_interes_usuario[k] != ',') {
                        usersInterest.push(parseInt(users[i].id_tema_interes_usuario[k]));
                    }

                }
            }
            else {
                usersInterest.push(parseInt(users[i].id_tema_interes_usuario));
            }
        }
        cantidadDatos = count(nombreTemas.length, usersInterest)
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
});



function count(totalCategories, interestCategories) {
    console.log(totalCategories);
    console.log(interestCategories);
    countData = []
    for (var i = 1; i <= totalCategories; i++) {
        countData.push(parseInt(0));

        for (var k = 0; k < interestCategories.length; k++) {
            if (interestCategories[k] === i) {
                countData[i - 1] = countData[i - 1] + 1;

            }
        }


    }
    return countData;
}