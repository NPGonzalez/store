const express = require('express');
const app = express();



connection.connect(function(error) {
    if (!!error) {
        console.log('Error');
    } else {
        console.log('Connnected');
    }
});


app.get('/', (req, res) => {
    res.send();

});



app.listen(3000);