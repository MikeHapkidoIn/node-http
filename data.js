// requerir informacion al server
//hacer html...buscar como!
//crear la respuesta con res.end


const http = require("http");
const webInfo = require("./data");

const server = http.createServer((req, res) => {
  
  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${webInfo.title}</title>
    </head>
    <body>
      <h1>${webInfo.title} Probando!!</h1>
      <h2>${webInfo.subtitle}1,2,3</h2>
      <p>${webInfo.description}</p>
    </body>
    </html>
  `;

  
  res.end(html);
});

server.listen(0, () => {
    console.log(`server listening on por http://localhost:${server.address().port}`);
  });