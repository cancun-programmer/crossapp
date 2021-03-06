'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/db');
var api = require('./routes/routes');
const notifications = require('./core/notifications');

const app = express();

// Conexion a la base de datos
mongoose.connect(config.database, { useNewUrlParser: true }).then(
    () => {
        console.log('Conectado a la base de datos ' + config.database)
        app.listen(port, () => {
            console.log("Servidor escuchando en http://localhost:" + port);
        });
    },
    err => { console.log('Error de conexion ' + err) }
);


// Usar este puerto si la app será alojada en Heroku
var port = process.env.PORT || 8080;
// Usar este puerto para desarrollo
// const port = 3000;

// CORS Middleware permite la conexion entre archivos
//app.use(cors());

// Establecer carpeta
//app.use(express.static(path.join(__dirname, 'public')))

// Body Parser Middleware permite la renderización de las vistas
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Headers necesarios para que el servidor node de accso a las peticiones no importando que cabeceras
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    next();
  });

//setInterval(notifications.generateNotification, 10000);
notifications.generateNotification();


app.use('/api', api);

