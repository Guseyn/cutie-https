let cutieHttps = require('@cuties/http');

delete cutieHttps.CreatedAgent;
delete cutieHttps.CreatedHttpServer;
delete cutieHttps.HttpGetRequest;
delete cutieHttps.HttpRequest;

cutieHttps.CreatedAgent = require('./src/agent/CreatedAgent');
cutieHttps.CreatedHttpsServer = require('./src/https/CreatedHttpsServer');
cutieHttps.HttpsGetRequest = require('./src/https/HttpsGetRequest');
cutieHttps.HttpsRequest = require('./src/https/HttpsRequest');

module.exports = cutieHttps;
