const request = require('request');
const querystring = require('querystring');
var express = require('express');
var router = express.Router();
 

/* GET web listing. */
 

router.get('/detail/:id', function(req, res, next) {
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

router.get('*', function(req, res, next) {
  res.statusCode = 200;

  res.send(req.originalUrl);
//  console.log(req);
  /*
  var url = 'http://ethica.id/'+req.params[0];
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
      res.header("Content-Type",'text/html');
      res.send(data);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  }); 
  */
}); 
 
module.exports = router;
