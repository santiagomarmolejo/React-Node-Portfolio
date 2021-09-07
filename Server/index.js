const express = require('express');
const post = require('./models/post');
const app = express();

//CORS

const cors = require('cors');

app.use(cors());


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

app.get('/getpost', async (req, res) => {

    let arrayPosts;

    try {
        arrayPosts = await post.find();
        console.log(arrayPosts);
    } catch (error) {
        console.log(error);
    }

    res.send(arrayPosts);
})

app.post('/insert' , async (req, res) => {
    await post.create({
        url : 'a',
        iso : '2',
        f : '3',
        shutter_speed : '3',
        img_name : 'a'
    });
    res.send('hola');
})

app.listen(3001, () => {
    console.log('running');
})