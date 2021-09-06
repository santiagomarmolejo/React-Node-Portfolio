const express = require('express');

const app = express();


//Conexión a base de datos

const mongoose = require('mongoose');

const user = 'pruebaadmin';
const password = 'pruebaadmin';
const dbName = 'personal-portfolio';

const url = `mongodb+srv://${user}:${password}@cluster0.k4avw.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true
})
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e));

app.get('/', (req, res) => {
    res.send('Hola');
})

app.listen(3001, () => {
    console.log('running');
})