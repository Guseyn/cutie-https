'use strict'

const {
  as, AsyncObject, Event
} = require('@cuties/cutie')
const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  Value
} = require('@cuties/object')
const {
  HeadersOfResponse,
  ResponseWithHeader,
  HttpsRequest,
  EndedRequest,
  EndedResponse,
  ClosedServer
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8055
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
    new DeepStrictEqualAssertion(
      new Value(
        new HeadersOfResponse(
          new EndedResponse(
            new ResponseWithHeader(res, 'name', 'value'), 'fake response'
          )
        ), 'name'
      ),
      'value'
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
