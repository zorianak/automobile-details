var express = require('express');
var router = express.Router();

/* GET Auto List Page. */
router.get('/automobile/list', function(req, res) {
    //res.render('automobile/list', { title: 'Automobile List' })
    var db = req.db;
    db.collection('automobile').find().toArray(function (err, items) {
        res.json(items);
    });
});


module.exports = router;
