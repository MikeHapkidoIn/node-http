// requerir informacion al server
//hacer html...buscar como!
//crear la respuesta con res.end


const http = require("node:http");
const {title, subtitle, description} = require("./data.js");//hacemos destructuring para traernos los objetos del data server

const server = http.createServer((req, res) => {
  
  const html = `
  <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}challenge</title>
    </head>
    <body>
      <h1>${title}</h1>
      <h2>${subtitle}</h2>
      <p>${description}</p>
    </body>
    </html>
  `;

  
  res.end(html);
});

const PORT = 3000 // se puede guardar el puerto en variable y luego poder cambiarlo aqui.

server.listen(PORT, () => {
    console.log(`server listening on por http://localhost:${PORT}`);//${server.address().port} esto seria para usarlo en el caso de que no supiesemos el puerto que utilizar siempre poniendo el valor 0 al principio.
  });