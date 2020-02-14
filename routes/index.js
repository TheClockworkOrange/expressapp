var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {
    res.redirect('/catalog');
  });
router.get('/wow/', function(req, res, next){
    res.send('oh my oh my blimey lad');
});

module.exports = router;
