var express = require('express');
var router = express.Router();

/* get home page*/
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Woop woop woop ! ! !'});
});
router.get('/wow/', function(req, res, next){
    res.send('oh my oh my blimey lad');
});

module.exports = router;
