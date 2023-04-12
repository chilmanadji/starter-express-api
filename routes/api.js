const request = require('request');
const querystring = require('querystring');
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

router.get('/ethica/detail/:id', function(req, res, next) {
  res.statusCode = 200;
   
  var url = 'http://ethica.id/product-detail/attribute/'+req.params.id;
  const https = require('http');
  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => { 
      var result = data;
      res.header("Content-Type",'text/plain');
      res.send(data);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  }); 
});

router.get('/ethica/loadmaster', function(req, res, next) {
  res.statusCode = 200;
   
   
  var url = 'https://api.ethica.id/public/master_barang/load_data_master';
  const https = require('https');
  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => { 
      var result = JSON.parse(data);
      res.header("Content-Type",'application/json');
      res.send(JSON.stringify(result, null, 3));
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});



router.get('/ethica/loadproduct/:key', function(req, res, next) {
  res.statusCode = 200;
   
   
  var url = 'https://api.ethica.id/public/master_barang/loaddata_eksternal?customer_seq=0979'+req.params.key;
  const https = require('https');
  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => { 
      var result = JSON.parse(data);
      res.header("Content-Type",'application/json');
      res.send(JSON.stringify(result, null, 3));
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

router.get('/ethica/search/:search', function(req, res, next) {
  res.statusCode = 200;
  
 
  var url = 'https://api.ethica.id/public/master_barang/loaddata_eksternal?customer_seq=0979&offset=0&search='+req.params.search;
  const https = require('https');
  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => { 
      var result = JSON.parse(data);
      res.header("Content-Type",'application/json');
      res.send(JSON.stringify(result, null, 3));
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

});

router.get('/ethica/latest', function(req, res, next) {
  res.statusCode = 200;
 // res.setHeader('Content-Type', 'text/plain');

  var url = 'https://api.ethica.id/public/master_barang/loaddata_eksternal?customer_seq=0979&offset=0&is_ada_stok=T&order_by=tahun+DESC';
  const https = require('https');
  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => { 
      var result = JSON.parse(data);
      res.header("Content-Type",'application/json');
      res.send(JSON.stringify(result, null, 3));
      console.log(JSON.parse(data));
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

});

router.get('/cek', function(req, res, next) {
  res.send(req.query.url);
});

router.get('/image', function(req, res, next) {
  const url = req.query.url;
   request({
    url: url,
    encoding: null
  }, 
  (err, resp, buffer) => {
    if (!err && resp.statusCode === 200){
      res.set("Content-Type", "image/jpeg");
      res.send(resp.body);
    }
  });
});

router.get('/muslim', function(req, res, next) {
   var url = req.query.url;
  // url = 'https://www.muslimgaleri.co.id/detail~rocella-gamis-khayra-olive-4xl-5xl~510~744';
   request({
    url: url,
    encoding: null
  }, 
  (err, resp, buffer) => {
    if (!err && resp.statusCode === 200){ 
      res.set("Content-Type", "text/plain");
      res.send(resp.body);
    }
  });
});

router.get('*',function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('what are you looking for?');
});
module.exports = router;
