// api-node/server.js - a API do Portifolio em Node (Aula 21)
const express = require('express');

const app = express();
const PORTA = 3000;

app.get('/', (req, res) => {
    res.send('API do Portifolio em Node: no ar');
});

app.listen(PORTA, () => {
    console.log('API no ar em http:localhost:' + PORTA);
});