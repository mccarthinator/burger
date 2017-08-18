var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function(req, res){
    burger.all(function(data){
        var htmlDisplay = {
            burgers: data
        };
        console.log(htmlDisplay);
        res.render('index', htmlDisplay);
    });
});


module.exports = router;