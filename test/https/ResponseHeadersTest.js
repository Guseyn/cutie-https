'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  ClosedServer,
  ResponseFromHttpsRequest,
  ResponseHeaders
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8089
const hostname = '127.0.0.1'
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
}

FakeServer(port).as('server').after(
  new Assertion(
    new IsObject(
      new ResponseHeaders(
        new ResponseFromHttpsRequest(options, '{requestBody}')
      )
    )
  ).after(
    new ClosedServer(as('server'))
  )
).call()
