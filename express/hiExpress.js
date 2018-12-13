const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlEncodedParser = bodyParser.urlencoded({extended:false});

app.get('/', (req,res) => {
    res.send(' Merhaba ');
});

app.get('/admin', (req,res) => {
    res.send(' Merhaba Admin ');
});

app.get('/product', (req,res) => {
    console.log('ID: '+ req.query.id);  // product?id=1
    res.send(' Ürün ');
});

app.post('/', (req,res) => {          // postman ile gönder
    res.send(' Post isteği alındı ');
});

app.post('/profile', urlEncodedParser, (req,res) => {
    console.log(req.body.isim)
    res.send(' Post isteği alındı ');
});


app.listen(3000, () => {
    console.log(" express server çalıştı")
});