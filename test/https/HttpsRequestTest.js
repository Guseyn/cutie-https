'use strict'

const {
  Server
} = require('https');
const {
  IncomingMessage
} = require('http');
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
  ClosedServer,
  HttpsRequest,
  EndedRequest
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8011;
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
          new Is(res, IncomingMessage)
        ).after(
          new Assertion(
            new Is(server, Server)
          ).after(
            new ClosedServer(server)
          )
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
