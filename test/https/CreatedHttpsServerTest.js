'use strict'

const {
  Agent,
  Server
} = require('https');
const {
  Socket
} = require('net');
const {
  as, AsyncObject, Event
} = require('@cuties/cutie');
const {
  Assertion, EqualAssertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('@cuties/process');
const {
  ReadDataByPath
} = require('@cuties/fs');
const {
  CreatedAgent,
  CreatedAgentConnection,
  CreatedOptions,
  OptionsWithAgent,
  ClosedServer,
  DestroyedAgent,
  HttpsRequest,
  EndedRequest,
  ReusedSocketOfAgent
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');
const ArrayOf = require('./../../src/ArrayOf');

const port = 8009;
const hostname = '127.0.0.1';

class GeneratedRequestCallback extends AsyncObject {

  constructor(server) {
    super(server);
  }

  definedSyncCall() {
    return (server) => {
      return (res) => {
        new Assertion(
          new Is(server, Server)
        ).after(
          new ClosedServer(server)
        ).call();
      }
    }
  }

}

new CreatedOptions(
  'hostname', hostname,
  'port', port,
  'path', '/',
  'method', 'GET',
  'ca', new ArrayOf(
    new ReadDataByPath('./src/cert.pem')
  )
).as('options').after(
  new KilledProcess(
    new Pid(
      new FoundProcessOnPort(port)
    ), 'SIGHUP'
  ).after(
    FakeServer(port).as('server').after(
      new EndedRequest(
        new HttpsRequest(
          new OptionsWithAgent(
            as('options'), new CreatedAgent(as('options'))
          ), new GeneratedRequestCallback(
            as('server')
          )
        )
      )
    )
  )
).call();
