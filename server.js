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

    let sql = 'SELECT * FROM product';
    let query = connection.query(sql, function(error, results, fields) {
        if (error) throw error;
        console.log(results);


        connection.end();
        res.send(results);

    });

});

app.listen(3000);