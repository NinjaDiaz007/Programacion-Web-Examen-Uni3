const express = require('express');
const { parse } = require('path');
const path = require('path');

//Creamos un objeto de Router Express
const router = express.Router();

//Exportar nuestro modulo ROUTES
module.exports = router;

router.get('/', (req, res) =>{
   res.render('pages/inicio');
});

router.get('/about', (req, res) =>{
    
    res.render('pages/about');
});

router.get('/contacto', (req, res) => {
    res.render('pages/contacto');
});

router.get('/compra-venta', (req,res) => {
    res.render('pages/compra-venta');
});

router.get('/registro', (req,res) => {
    res.render('pages/registro');
});

router.get('/gracias', (req,res) => {
    res.render('pages/gracias');
});

router.get('/login-register', (req,res) => {
    res.render('pages/login-register');
});
