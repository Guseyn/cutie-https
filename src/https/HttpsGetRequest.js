'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const https = require('https');

// Represented result is request
class HttpsGetRequest extends AsyncObject {

  constructor(options, callback) {
    super(options, callback);
  }

  definedSyncCall() {
    return https.get;
  }

}

module.exports = HttpsGetRequest;
