'use strict'

const {
  Socket
} = require('net')
const {
  as
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is, IsNumber
} = require('@cuties/is')
const {
  DestroyedStream
} = require('@cuties/stream')
const {
  ReadDataByPath
} = require('@cuties/fs')
const {
  CreatedAgentConnection,
  CreatedAgent,
  CreatedOptions,
  ClosedServer,
  MaxSocketsOfAgent
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8004

FakeServer(port).as('server').after(
  new Assertion(
    new Is(
      new CreatedAgentConnection(
        new CreatedAgent(
          new CreatedOptions(
            'keepAlive', false,
            'cert', new ReadDataByPath('./src/cert.pem')
          )
        ).as('agent'), { port: port }
      ).as('socket'), Socket
    )
  ).after(
    new Assertion(
      new IsNumber(
        new MaxSocketsOfAgent(
          as('agent'), as('socket')
        )
      )
    ).after(
      new DestroyedStream(as('socket')).after(
        new ClosedServer(as('server'))
      )
    )
  )
)// .call()
