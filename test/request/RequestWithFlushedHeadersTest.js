'use strict'

const {
  as, AsyncObject
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  RequestWithFlushedHeaders,
  HttpsRequest,
  EndedRequest,
  ClosedServer
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8036
const hostname = '127.0.0.1'
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
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

FakeServer(port).as('server').after(
  new Assertion(
    new IsObject(
      new RequestWithFlushedHeaders(
        new EndedRequest(
          new HttpsRequest(
            options, new GeneratedRequestCallback(
              as('server')
            )
          )
        )
      )
    )
  )
).call()
