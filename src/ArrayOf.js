'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is array
class ArrayOf extends AsyncObject {

  constructor(...args) {
    super(...args);
  }

  definedSyncCall() {
    return (...args) => {
      return args;
    }
  }

}

module.exports = ArrayOf;
