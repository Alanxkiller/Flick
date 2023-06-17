const express = require('express');
const app = express();

const morgan = require('morgan');
const exphbs = require('express-handlebars');

let envio = require('../controllers/correoController');

app.post('/envio',envio.envioCorreo);

module.exports = app;