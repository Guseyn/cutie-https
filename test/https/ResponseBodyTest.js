'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  ClosedServer,
  ResponseFromHttpsRequest,
  ResponseBody
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8091
const hostname = '127.0.0.1'
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
}

FakeServer(port).as('server').after(
  new Assertion(
    new Is(
      new ResponseBody(
        new ResponseFromHttpsRequest(options, '{requestBody}')
      ),
      Buffer
    )
  ).after(
    new ClosedServer(as('server'))
  )
).call()
