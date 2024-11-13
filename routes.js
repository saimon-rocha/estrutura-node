// routes/index.js
const { Router } = require('express');
<<<<<<< HEAD
const HomeController = require('./apps/controllers/HomeController');

// Instanciação dos roteadores
const homeRoutes = new Router();

// Rota para a página inicial
homeRoutes.get('/', HomeController.inicio);

const routes = new Router();
// Associando o roteador homeRoutes à rota /home
routes.use('/home', homeRoutes);
=======
const modeloController = require('./apps/controllers/ChaveController')

// Instanciação dos roteadores
const modeloController = new Router();

const routes = new Router();
// Associando cada roteador à rota principal
routes.use('/usuario',    modeloController);
>>>>>>> 9afa0db (Ajustando estrutura NODE)

// Redireciona a rota raiz (/) para /home/
routes.get('/', (req, res) => {
<<<<<<< HEAD
    res.redirect('/home/');
=======
    res.redirect('/');
>>>>>>> 9afa0db (Ajustando estrutura NODE)
});

module.exports = routes;
