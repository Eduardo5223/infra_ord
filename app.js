const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hola Mundo desde azure infra');
});

app.listen(port, () => {
    console.log('La aplicacione esta escuchando en http://localhost:${port}');
});