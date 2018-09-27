let cutieHttps = require('@cuties/http');
delete cutieHttps.CreatedHttpServer;
delete cutieHttps.HttpGetRequest;
delete cutieHttps.HttpRequest;
cutieHttps.CreatedOptions = require('./src/options/CreatedOptions');
cutieHttps.CreatedHttpsServer = require('./src/https/CreatedHttpsServer');
cutieHttps.HttpsGetRequest = require('./src/https/HttpsGetRequest');
cutieHttps.HttpsRequest = require('./src/https/HttpsRequest');

module.exports = cutieHttps;
