const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hola Mundo desde docker');
});

app.listen(port, () => {
    console.log('La aplicacione esta escuchando en http://localhost:${port}');
});