var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Auto List Page. */
router.get('/automobile/list', function(req, res) {
    //res.render('automobile/list', { title: 'Automobile List' })
    var db = req.db;
    // the nice thing is that mongo auto-sorts things with .sort().
    db.collection('automobiles').find().sort({ mpg:-1} ).toArray(function (err, items) {
        res.json(items);
    });
});

module.exports = router;
