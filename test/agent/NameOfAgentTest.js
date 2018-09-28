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
  Is, IsString
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
  NameOfAgent
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8005;

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
        new IsString(
          new NameOfAgent(
            as('agent'), as('socket')
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
