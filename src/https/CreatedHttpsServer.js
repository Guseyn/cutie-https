'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const https = require('https');

// Represented result is server
class CreatedHttpsServer extends AsyncObject {

  constructor(options, requestListener) {
    super(options, requestListener);
  }

  definedSyncCall() {
    return (options, requestListener) => {
      return https.createServer(options, requestListener);
    }
  }

}

module.exports = CreatedHttpsServer;
