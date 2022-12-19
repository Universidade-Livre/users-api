const express = require('express');

const app = express();
const PORT = 3000;

const users = [
    {
        "id": 1,
        "nome": "Mariane Benedita Cristiane Pires",
        "idade": 55
    },
    {
        "id": 2,
        "nome": "Renato Rodrigo Arthur Rocha",
        "idade": 23
    },
    {
        "id": 3,
        "nome": "Paul Jarvis",
        "idade": 80
    },
    {
        "id": 4,
        "nome": "Brian Young",
        "idade": 83
    },
    {
        "id": 5,
        "nome": "Lukas Budimaier",
        "idade": 18
    }];

app.use((request, response, next) => {
    console.log('[' + (new Date()) + '] ' + request.method + ' ' + request.url);
    next();
});

app.get('/helloworld', (request, response) => {
    response.send('Hello World!');
});

app.get('/helloworld2', (request, response) => {
    response.json({ content: 'Hello World!' });
});

app.get('/users', (request, response) => {
    response.json(users);
});

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});