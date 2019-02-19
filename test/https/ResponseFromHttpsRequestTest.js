'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  AreBuffersEqual
} = require('@cuties/buffer')
const {
  ClosedServer,
  ResponseFromHttpsRequest,
  ResponseBody
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8088
const hostname = '127.0.0.1'
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'POST'
}

FakeServer(port).as('server').after(
  new Assertion(
    new AreBuffersEqual(
      new ResponseBody(
        new ResponseFromHttpsRequest(options, '{requestBody}')
      ),
      Buffer.from('fake response')
    )
  ).after(
    new ClosedServer(as('server'))
  )
).call()
