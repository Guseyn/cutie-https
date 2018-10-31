'use strict'

const https = require('https');

// err, {statusCode, headers, body} in callback
const responseFromHttpsReqest = (options, requestBody, callback) => {
  const req = https.request(options, (res) => {
    let resObj = {};
    resObj.statusCode = res.statusCode;
    resObj.headers = res.headers;
    let body = [];
    res.on('data', (chunk) => {
      body.push(chunk);
    });
    res.on('end', () => {
      resObj.body = Buffer.concat(body);
      callback(null, resObj);
    });
  });
  req.on('error', (err) => {
    callback(err);
  });
  req.write(requestBody);
  req.end();
}

module.exports = responseFromHttpsReqest;
