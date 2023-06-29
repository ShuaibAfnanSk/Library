const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;


app.listen(process.env.PORT ||  port, () => console.log(`Listening on port ${port}`))
app.use(express.static('static'));

app.get('/home', (request, respone) => {
    respone.sendFile('index.html', { root : './templates/' });
});

app.get('/', (request, respone) => {
    respone.sendFile('signup.html', { root : './templates/' });
});

app.get('/login', (request, respone) => {
    respone.sendFile('login.html', { root : './templates/' });
});

app.get('/products', (request, respone) => {
    respone.sendFile('products.html', { root : './templates/' });
});

app.get('/checkout', (request, respone) => {
    respone.sendFile('checkout.html', { root : './templates/' });
});

