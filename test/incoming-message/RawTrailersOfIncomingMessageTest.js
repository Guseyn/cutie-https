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
  ClosedServer,
  HttpsRequest,
  EndedRequest,
  RawTrailersOfIncomingMessage
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8020
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

  definedSyncCall () {
    return (server) => {
      return (res) => {
        new Assertion(
          new IsObject(
            new RawTrailersOfIncomingMessage(res)
          )
        ).after(
          new ClosedServer(server)
        ).call()
      }
    }
  }
}

FakeServer(port).as('server').after(
  new EndedRequest(
    new HttpsRequest(
      options, new GeneratedRequestCallback(
        as('server')
      )
    )
  )
).call()
