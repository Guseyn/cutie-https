'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represented result is json
class ParsedJSON extends AsyncObject {
  constructor (string) {
    super(string)
  }

  syncCall () {
    return JSON.parse
  }
}

module.exports = ParsedJSON
