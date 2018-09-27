'use strict'

const {
  ClientRequest
} = require('http');
const {
  as, AsyncObject, Event
}  = require('@cuties/cutie');
const {
  Assertion
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
  HttpRequest,
  EndedRequest,
  WrittenRequest,
  EndedResponse,
  ClosedServer
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8049;
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
        new ClosedServer(server).call();
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
    new Assertion(
      new Is(
        new EndedRequest(
          new WrittenRequest(
            new HttpRequest(
              options, new GeneratedRequestCallback(
                as('server')
              )
            ), 'data'
          )
        ), ClientRequest
      )
    )
  )
).call();
