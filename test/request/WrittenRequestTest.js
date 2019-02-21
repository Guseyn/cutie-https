'use strict'

const {
  ClientRequest
} = require('http')
const {
  as, AsyncObject
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  HttpsRequest,
  EndedRequest,
  WrittenRequest,
  ClosedServer
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8049
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
    new Is(
      new EndedRequest(
        new WrittenRequest(
          new HttpsRequest(
            options, new GeneratedRequestCallback(
              as('server')
            )
          ), 'data'
        )
      ), ClientRequest
    )
  )
).call()
