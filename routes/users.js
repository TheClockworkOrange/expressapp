var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

function coolRouter(req, res, next){
  res.send('so cool');
}

router.get('/cool/', coolRouter);

module.exports = router;
