var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', { title: 'Express' });
});

/* GET index page. */
router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Index' });
});

module.exports = router;
