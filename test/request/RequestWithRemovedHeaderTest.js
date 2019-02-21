'use strict'

const {
  as, AsyncObject
} = require('@cuties/cutie')
const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  RequestHeader,
  RequestWithHeader,
  RequestWithRemovedHeader,
  HttpsRequest,
  EndedRequest,
  ClosedServer
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8039
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
  new StrictEqualAssertion(
    new RequestHeader(
      new EndedRequest(
        new RequestWithRemovedHeader(
          new RequestWithHeader(
            new HttpsRequest(
              options, new GeneratedRequestCallback(
                as('server')
              )
            ), 'name', 'value'
          ), 'name'
        )
      ), 'name'
    ), undefined
  )
).call()
