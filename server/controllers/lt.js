const express = require('express');


var app = express();
app.get('/', (req, res, next) => {
    res.status(200).json({
        msg: 'Services is working'
    })
});
app.get('/:fecha', (req, res, next) => {
    var fecha = req.params.fecha
    res.status(200).json({
        msg: `Services is working, and you param was ${fecha} `
    })
});

module.exports = app;