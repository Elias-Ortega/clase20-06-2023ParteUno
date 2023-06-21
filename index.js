const http = require("node:http");

http.createServer((request, response) => {

    //metodo de http para crear el servidor

    response.write("Hola esta es mi primera respuesta desde un servidor"); //Response es para dar una respuesta al evento

    response.end();

  }).listen(8080); //Puerto que va a escuchar la llamada


console.log("Escuchando por el puerto 8080");