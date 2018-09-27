'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const {
  Agent
} = require('https');

// Represented result is agent
class CreatedAgent extends AsyncObject {

  constructor(agent) {
    super(agent);
  }

  definedSyncCall() {
    return (options) => {
      return new Agent(options);
    }
  }

}

module.exports = CreatedAgent;
