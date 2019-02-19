'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represented result is json
class ParsedJSON extends AsyncObject {
  constructor (string) {
    super(string)
  }

  definedSyncCall () {
    return JSON.parse
  }
}

module.exports = ParsedJSON
