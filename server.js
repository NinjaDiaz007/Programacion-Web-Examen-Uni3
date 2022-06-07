//Require modules
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const bodyparser = require('body-parser');
const port = process.env.PORT || 8080;

//Motor de Vistas EJS
app.set('view engine', 'ejs');
app.use(ejsLayouts);

//uso bodyParser
app.use(express.urlencoded({extended: true }));

//Recursos Publicos
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));//Para usar los recursoso dentro de la carpeta

//Cargar Modulo de ROUTES
const  router = require('./routes/routes');
app.use('/', router);

app.listen(port, () =>{
     console.log("Servidor activo por el puerto 8080");
});