'use strict'

const {
  as, AsyncObject, Event
} = require('@cuties/cutie')
const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  TimeoutOfServer,
  ServerWithTimeout,
  HttpsRequest,
  EndedRequest,
  EndedResponse,
  ClosedServer
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8085
const hostname = '127.0.0.1'
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
}

class RequestResponseEvent extends Event {
  constructor () {
    super()
  }

  definedBody (req, res) {
    new EndedResponse(
      res, 'fake response'
    ).call()
  }
}

class GeneratedRequestCallback extends AsyncObject {
  constructor (server) {
    super(server)
  }

  definedSyncCall () {
    return (server) => {
      return (res) => {
        new StrictEqualAssertion(
          new TimeoutOfServer(
            new ServerWithTimeout(
              server, 100, () => {}
            )
          ), 100
        ).after(
          new ClosedServer(server)
        ).call()
      }
    }
  }
}

FakeServer(
  port, hostname, new RequestResponseEvent()
).as('server').after(
  new EndedRequest(
    new HttpsRequest(
      options, new GeneratedRequestCallback(
        as('server')
      )
    )
  )
).call()
