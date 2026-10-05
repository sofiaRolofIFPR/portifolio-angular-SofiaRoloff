// api-node/server.js - a API do Portifolio em Node (Aula 21)
const express = require('express');

const app = express();
const PORTA = 3000;

//a corrigir:
const projetos = [
    {
        id: 1,
        nome: 'Portifolio Angular',
        descricao: 'Meu portifolio com Angular e Angular Material',
        tecnologias: 'Angular, TypeScript',
        link_github: null,
        ano: 2026
    },
    {
        id: 2,
        nome: 'API do Portifolio em PHP',
        descricao: 'Endpoints de projetos e catalogo com PDO e MariaDB',
        tecnologias: 'PHP, MariaDB',
        link_github: null,
        ano: 2026
    },
    {
        id: 3,
        nome: 'Sistema de Cadastro v1',
        descricao: '....',
        tecnologias: 'llll',
        link_github: null,
        ano: 2026
    }
];

app.get('/api/projetos', (req, res) => {
    res.json(projetos);
});

app.listen(PORTA, () => {
    console.log('API no ar em http:localhost:' + PORTA);
});