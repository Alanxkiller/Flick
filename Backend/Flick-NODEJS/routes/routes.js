const express = require('express');
const app = express();

let envio = require('../controllers/correoController');
let obtenerVideo = require('../controllers/firebaseController');


app.post('/envio',envio.envioCorreo);
app.get('/obtenerVideo',obtenerVideo.obtenerVideo);

module.exports = app;