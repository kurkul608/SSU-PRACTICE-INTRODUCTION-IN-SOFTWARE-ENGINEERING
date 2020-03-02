const express = require('express');
const app = express.Router();
let article = require('./db');


app.get('/PowerBank/', function (req, res) {
    res.send(article)
});


app.post('/PowerBank/', function (req, res) {
    
    let artic = {
        id: Date.now(),
        name: req.body.name,
        tank: req.body.tank,
        maxCurrent: req.body.maxCurrent,
        USBcount: req.body.USBcount,
        fastCharge: req.body.fastCharge,
        weight: req.body.weight
    }
    article.push(artic);
    res.sendStatus(200);
});

app.put('/PowerBank/:id', function (req, res){
    let artic = article.find(function (artic) {
        return artic.id === Number(req.params.id)
    });
    artic.name = req.body.name;
    artic.tank = req.body.tank;
    artic.maxCurrent = req.body.maxCurrent;
    artic.USBcount = req.body.USBcount;
    artic.fastCharge = req.body.fastCharge;
    artic.weight = req.body.weight;
    res.sendStatus(200);
})

app.delete ('/PowerBank/:id', function (req, res){
    article = article.filter(function (artic) {
        return artic.id !== Number(req.params.id)
    });
    res.sendStatus(200);
})
module.exports = app;