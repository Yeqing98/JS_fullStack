const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('hello word')
})

app.listen(8081, function(req, res) {
    console.log('app listening on port 8081')
})