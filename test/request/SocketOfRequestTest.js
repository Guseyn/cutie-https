'use strict'

const {
  Socket
} = require('net');
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
  SocketOfRequest,
  HttpRequest,
  EndedRequest,
  EndedResponse,
  ClosedServer
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8048;
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
        new SocketOfRequest(
          new EndedRequest(
            new HttpRequest(
              options, new GeneratedRequestCallback(
                as('server')
              )
            )
          )
        ), Socket
      )
    )
  )
).call();
