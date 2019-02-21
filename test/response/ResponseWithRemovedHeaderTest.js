'use strict'

const {
  as, AsyncObject, Event
} = require('@cuties/cutie')
const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  HasResponseHeader,
  ResponseWithHeader,
  ResponseWithRemovedHeader,
  HttpsRequest,
  EndedRequest,
  EndedResponse,
  ClosedServer
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8061
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

  body (req, res) {
    new StrictEqualAssertion(
      new HasResponseHeader(
        new EndedResponse(
          new ResponseWithRemovedHeader(
            new ResponseWithHeader(res, 'name', 'value'), 'name'
          ), 'fake response'
        ), 'name'
      ), false
    ).call()
  }
}

class GeneratedRequestCallback extends AsyncObject {
  constructor (server) {
    super(server)
  }

  syncCall () {
    return (server) => {
      return (res) => {
        new ClosedServer(server).call()
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
