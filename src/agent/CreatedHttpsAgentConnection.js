'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is stream/socket
class CreatedHttpsAgentConnection extends AsyncObject {
  constructor (agent, options) {
    super(agent, options)
  }

  syncCall () {
    return (agent, options) => {
      return agent.createConnection(options)
    }
  }
}

module.exports = CreatedHttpsAgentConnection
