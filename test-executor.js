const executor = require('test-executor');

/* 
  The main goal here is to check if everything works properly in terms of consistency of objects,
  here we use self signed certificate,
  so we need to set this property (in real code you need to use certificate
   that is signed by  Certificate Authority and also you need to use certificate in requests to https server)
*/
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

executor('./test/https');
