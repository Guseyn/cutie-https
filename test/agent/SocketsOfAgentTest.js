'use strict'

const {
  Agent
} = require('https');
const {
  Socket
} = require('net');
const {
  as
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is, IsObject
} = require('@cuties/is');
const {
  DestroyedStream
} = require('@cuties/stream');
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('@cuties/process');
const {
  CreatedAgentConnection,
  ClosedServer,
  SocketsOfAgent
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const agent = new Agent({ keepAlive: false });
const port = 8008;

new KilledProcess(
  new Pid(
    new FoundProcessOnPort(port)
  ), 'SIGHUP'
).after(
  FakeServer(port).as('server').after(
    new Assertion(
      new Is(
        new CreatedAgentConnection(
          agent, {port: port}
        ).as('socket'), Socket
      )
    ).after(
      new Assertion(
        new IsObject(
          new SocketsOfAgent(
            agent, as('socket')
          )
        )
      ).after(
        new DestroyedStream(as('socket')).after(
          new ClosedServer(as('server'))
        )
      )
    )
  )
).call();