'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const responseFromHttpsRequest = require('./../custom-calls/responseFromHttpsRequest');

// Represented result is {statusCode, headers, body}
class ResponseDataFromHttpsRequest extends AsyncObject {

  constructor(options, requestBody) {
    super(options, requestBody);
  }

  definedAsyncCall() {
    return (options, requestBody, callback) => {
      return responseFromHttpsRequest(options, requestBody, callback);
    }
  }

}

module.exports = ResponseDataFromHttpsRequest;