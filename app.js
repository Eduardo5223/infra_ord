const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Cambio en video');
});

app.listen(port, () => {
    console.log('La aplicacione esta escuchando en ${port}');
});
