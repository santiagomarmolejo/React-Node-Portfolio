const express = require('express');

const app = express();

app.get('/', (req, res) =>  {
    res.send('Hola');
})

app.listen(3001,()=> {
    console.log('running');
})