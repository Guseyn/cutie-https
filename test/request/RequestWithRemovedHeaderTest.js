'use strict'

const {
  ClientRequest
} = require('http');
const {
  as, AsyncObject
}  = require('@cuties/cutie');
const {
  EqualAssertion
} = require('@cuties/assert');
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('@cuties/process');
const {
  RequestHeader,
  RequestWithHeader,
  RequestWithRemovedHeader,
  HttpRequest,
  EndedRequest,
  EndedResponse,
  ClosedServer
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8039;
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
    new EqualAssertion(
      new RequestHeader(
        new EndedRequest(
          new RequestWithRemovedHeader(
            new RequestWithHeader(
              new HttpRequest(
                options, new GeneratedRequestCallback(
                  as('server')
                )
              ), 'name', 'value'
            ), 'name'
          )
        ), 'name'
      ), undefined
    )
  )
).call();
