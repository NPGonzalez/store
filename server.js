const express = require('express');
const app = express();



app.get('/', (req, res) => {

    res.send('HOLA');

});



app.listen(3000);