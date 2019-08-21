let cutieHttps = require('@cuties/http');

cutieHttps.CreatedHttpsAgent = require('./src/agent/CreatedAgent');
cutieHttps.CreatedHttpsAgentConnection = require('./src/agent/CreatedAgentConnection');
cutieHttps.CreatedHttpsServer = require('./src/https/CreatedHttpsServer');
cutieHttps.HttpsGetRequest = require('./src/https/HttpsGetRequest');
cutieHttps.HttpsRequest = require('./src/https/HttpsRequest');
cutieHttps.ResponseFromHttpsGetRequest = require('./src/https/ResponseFromHttpsGetRequest');
cutieHttps.ResponseFromHttpsRequest = require('./src/https/ResponseFromHttpsRequest');

module.exports = cutieHttps;
