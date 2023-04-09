var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('api working');
});

/* GET api listing. */
router.get('/ethica', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('ethica data');
});

router.get('/ethica/latest', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  var datax = '';
  const https = require('https');
  https.get('https://api.ethica.id/public/master_barang/load_data_master', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      datax = data;
    //  console.log(data);
      res.send(data);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

});

router.get('*',function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('what are you looking for?');
});
module.exports = router;
