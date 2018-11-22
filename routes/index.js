var express = require('express');
var router = express.Router();

var userDao = require('../dao/HaiNanDAO')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', { title: 'Express' });
});

/* GET index page. */
router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Index' });
});
/* insert addUserAction user page. */
router.get('/add', function(req, res, next) {
    userDao.addAction(req,res,next)
});
/* select showUserAction user page. */
router.get('/show', function(req, res, next) {
    userDao.showAction(req,res,next)
});
module.exports = router;
