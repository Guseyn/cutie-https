'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is stream/socket
class CreatedAgentConnection extends AsyncObject {

  constructor(agent, options) {
    super(agent, options);
  }

  definedSyncCall() {
    return (agent, options) => {
      return agent.createConnection(options);
    }
  }

}

module.exports = CreatedAgentConnection;
