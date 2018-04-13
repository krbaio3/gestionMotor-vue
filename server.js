// const connect = require('connect');
// const serveStatic = require('serve-static');
const express = require('express');
const path = require('path');

const host = '0.0.0.0';
const baseWebRoot = __dirname;
const port = Number(process.env.PORT || 5000);

const app = express();

console.log(`Este es el baseWebRoot ${baseWebRoot}`);


// Vamos a requerir del modulo que provee Node.js 
// llamado child_process
// let exec = require('child_process').exec, child;
// Creamos la función y pasamos el string pwd 
// que será nuestro comando a ejecutar
// child = exec('ls',
// Pasamos los parámetros error, stdout la salida 
// que mostrara el comando
  // function (error, stdout, stderr) {
    // Imprimimos en pantalla con console.log
    // console.log(stdout);
    // controlamos el error
    // if (error !== null) {
      // console.log('exec error: ' + error);
    // }
// });


// const app = connect();
// // Por partes más claro:
// // Decimos a serverStatic que use el directorio dirWebRoot
// // Se lo agregamos a la instancia de connect
// app.use(serveStatic(dirWebRoot));

// // Le decimos que escuche por el puerto de la variable port
// app.listen(port);

// console.log(`static web server running on port: ${port}`);


// Otra opción:

// Instalar servidor expressjs

// Decirle que use la carpeta de estaticos dist
app.use(express.static(baseWebRoot +'/dist'));


app.get('/*', (req, res) => {
  res.sendFile(path.join(baseWebRoot + '/dist/index.html'));
});

// Arranque de app. por el puerto que diga Heroku o el 5000
app.listen(port, host, () => {
  console.log(`Listening on port ${port}`);
});

// con http-server tambien se puede configurar....