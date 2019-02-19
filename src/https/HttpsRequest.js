'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const https = require('https')

// Represented result is request
class HttpsRequest extends AsyncObject {
  // callback can be an Event
  constructor (options, callback) {
    super(options, callback)
  }

  definedSyncCall () {
    return (options, callback) => {
      return https.request(options, callback)
    }
  }

  onResult (req) {
    return req
  }
}

module.exports = HttpsRequest
