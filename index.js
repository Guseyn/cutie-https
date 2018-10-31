let cutieHttps = require('@cuties/http');

delete cutieHttps.CreatedAgent;
delete cutieHttps.CreatedHttpServer;
delete cutieHttps.HttpGetRequest;
delete cutieHttps.HttpRequest;
delete cutieHttps.ResponseFromHttpGetRequest;
delete cutieHttps.ResponseFromHttpRequest;

cutieHttps.CreatedAgent = require('./src/agent/CreatedAgent');
cutieHttps.CreatedAgentConnection = require('./src/agent/CreatedAgentConnection');
cutieHttps.CreatedHttpsServer = require('./src/https/CreatedHttpsServer');
cutieHttps.HttpsGetRequest = require('./src/https/HttpsGetRequest');
cutieHttps.HttpsRequest = require('./src/https/HttpsRequest');
cutieHttps.ResponseFromHttpsGetRequest = require('./src/https/ResponseFromHttpsGetRequest');
cutieHttps.ResponseFromHttpsRequest = require('./src/https/ResponseFromHttpsRequest');

module.exports = cutieHttps;
