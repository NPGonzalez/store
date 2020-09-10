const express = require('express');
const app = express();
const mysql = require('mysql');


app.get('/', (req, res) => {

    const connection = mysql.createConnection({
        host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
        user: 'bsale_test',
        password: 'bsale_test',
        database: 'bsale_test'
    });

    connection.connect(function(error) {
        if (!!error) {
            console.log('Error');
        } else {
            console.log('Connnected');
        }
    });


    res.send('HOLA');

});



app.listen(3000);