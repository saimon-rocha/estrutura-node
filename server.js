// Importações de módulos essenciais
const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const expressHandlebars = require('express-handlebars');
const cors = require('cors');
<<<<<<< HEAD
require('dotenv').config();
=======
const dotenv = require('dotenv');
>>>>>>> 9afa0db (Ajustando estrutura NODE)

// Configurações do ambiente
dotenv.config();
const { PORT, ENABLED_CORS, NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

<<<<<<< HEAD
const routes = require('./routes');
=======
// Configuração do banco de dados e associações de modelos
require('./database/index');
require('./apps/models/associations');
>>>>>>> 9afa0db (Ajustando estrutura NODE)

// Instância do Express e configurações básicas
const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 3000; // Defina um valor padrão se PORT não estiver definido
const { ENABLED_CORS } = process.env;
=======
>>>>>>> 9afa0db (Ajustando estrutura NODE)

// Middleware para CORS
app.use(cors({
  origin: ENABLED_CORS || '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Configuração de arquivos estáticos e parsing de requisições
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuração de sessão com cookie seguro em produção
app.use(session({
  secret: 'secreto',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60 * 1000, // 1 minuto
    secure: isProduction,
  },
}));

// Configuração de mensagens flash para feedback do usuário
app.use(flash());
app.use((req, res, next) => {
  res.locals.successMessage = req.flash('successMessage'); // Corrigido de 'sucessMessage' para 'successMessage'
  res.locals.errorMessage = req.flash('errorMessage');
  next();
});

// Configuração do template engine Handlebars com helper de JSON
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, '/views/layouts'),
  helpers: { json: (context) => JSON.stringify(context) },
}).engine);

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

// Rotas da aplicação
const routes = require('./routes');
app.use(routes);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}/`);
});
