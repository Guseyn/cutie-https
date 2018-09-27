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
  IsÏ
} = require('@cuties/is');
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('@cuties/process');
const {
  CreatedAgentConnection,
  ClosedServer,
  DestroyedAgent,
  HttpsRequest,
  EndedRequest,
  ReusedSocketOfAgent
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8009;
const hostname = '127.0.0.1';
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
};

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

new KilledProcess(
  new Pid(
    new FoundProcessOnPort(port)
  ), 'SIGHUP'
).after(
  FakeServer(port).as('server').after(
    new EndedRequest(
      new HttpsRequest(
        options, new GeneratedRequestCallback(
          as('server')
        )
      )
    )
  )
).call();
