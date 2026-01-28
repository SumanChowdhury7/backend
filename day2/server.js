const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send('Hello World!');
})
app.get('/about', (req, res) => {

    res.send('About!');
})

app.get('/product', (req, res) => {

    res.send('product!');
})
app.get('/contact', (req, res) => {

    res.send('contact!');
})
app.listen(3000);