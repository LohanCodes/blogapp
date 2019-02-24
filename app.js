// Carregando módulos
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const admin = require('./routes/admin');
const path = require('path');
// const mongoose = require("mongoose");

// Configurações

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Mongoose
// Em breve

// Public
app.use(express.static(path.join(__dirname, "public")));

// Rotas
app.get('/', (req, res) => {
    res.send("Rota principal");
});

app.get('/posts', (req, res) => {
    res.send("Lista de posts");
});

app.use('/admin', admin);

// Outros
const port = 8081;
app.listen(port, () => {
    console.log("Servidor rodando!");
});