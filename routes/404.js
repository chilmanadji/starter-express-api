var express = require('express');
var router = express.Router();
 

router.get('*',function(req, res, next) {
  /*var url = req.originalUrl;
  url = url.replace('/http:','http:');
  const https = require('http');
  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => { 
      data = data.replace('http://ethica.id')
      var result = data;
      res.header("Content-Type",'text/html');
      res.send(data);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  }); 
  */
  res.send(req.rawHeaders[1]);
});
module.exports = router;
