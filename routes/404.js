var express = require('express');
var router = express.Router();
 

router.get('*',function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('what are you looking for?');
});
module.exports = router;
