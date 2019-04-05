'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const responseFromHttpsGetRequest = require('./../custom-calls/responseFromHttpsGetRequest')

// Represented result is {statusCode, headers, body}
class ResponseFromHttpsGetRequest extends AsyncObject {
  constructor (options) {
    super(options)
  }

  asyncCall () {
    return (options, callback) => {
      return responseFromHttpsGetRequest(options, callback)
    }
  }
}

module.exports = ResponseFromHttpsGetRequest
