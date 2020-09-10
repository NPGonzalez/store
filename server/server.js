require('./config/config');
const express = require('express');
const app = express();

const path = require('path');
// const publicPath = path.resolve(__dirname, '../public');
const mysql = require('mysql');


// app.use(express.static(publicPath));

// app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    let a = [];
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
    connection.query(sql, function(error, results, fields) {
        if (error) throw error;

        connection.end();
        console.log(results);
        // res.send(results);
        res.send(results);

    });
});

app.listen(process.env.PORT);

/********************************* */