const http = require('http');


const PORT = 5000

const app = http.createServer((req, res)=>{
    /*enviarle el estado de solicitud al usuario*/
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola chicos');
});

app.listen(PORT, ()=>{
    console.log('el aplicativo esta corriendo en el puerto', PORT)
})