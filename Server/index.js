const express = require('express');
const post = require('./models/post');
const app = express();

//BodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

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


//Ruta que retorna los posts
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

app.post('/insert',async (req, res) => {

    let data = req.body;
    await post.create(data);

    console.log(req.body.url);
    res.send(req.body);
})

app.listen(3001, () => {
    console.log('running');
})