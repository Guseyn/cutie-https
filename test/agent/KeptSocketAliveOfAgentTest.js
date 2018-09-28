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
  Is
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
  ReadDataByPath
} = require('@cuties/fs');
const {
  CreatedAgentConnection,
  CreatedAgent,
  CreatedOptions,
  ClosedServer,
  KeptSocketAliveOfAgent
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8002;

new KilledProcess(
  new Pid(
    new FoundProcessOnPort(port)
  ), 'SIGHUP'
).after(
  FakeServer(port).as('server').after(
    new Assertion(
      new Is(
        new CreatedAgentConnection(
          new CreatedAgent(
            new CreatedOptions(
              'keepAlive', false,
              'cert', new ReadDataByPath('./src/cert.pem')
            )
          ).as('agent'), {port: port}
        ).as('socket'), Socket
      )
    ).after(
      new Assertion(
        new Is(
          new KeptSocketAliveOfAgent(
            as('agent'), as('socket')
          ), Socket
        )
      ).after(
        new DestroyedStream(as('socket')).after(
          new ClosedServer(as('server'))
        )
      )
    )
  )
).call();
