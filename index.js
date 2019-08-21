let cutieHttps = require('@cuties/http');

cutieHttps.CreatedHttpsAgent = require('./src/agent/CreatedHttpsAgent');
cutieHttps.CreatedHttpsAgentConnection = require('./src/agent/CreatedHttpsAgentConnection');
cutieHttps.CreatedHttpsServer = require('./src/https/CreatedHttpsServer');
cutieHttps.HttpsGetRequest = require('./src/https/HttpsGetRequest');
cutieHttps.HttpsRequest = require('./src/https/HttpsRequest');
cutieHttps.ResponseFromHttpsGetRequest = require('./src/https/ResponseFromHttpsGetRequest');
cutieHttps.ResponseFromHttpsRequest = require('./src/https/ResponseFromHttpsRequest');

module.exports = cutieHttps;
