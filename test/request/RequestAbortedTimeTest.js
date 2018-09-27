'use strict'

const {
  as, AsyncObject
}  = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('@cuties/process');
const {
  RequestAbortedTime,
  AbortedRequest,
  HttpsRequest,
  EndedRequest,
  EndedResponse,
  ClosedServer
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8028;
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
      new IsNumber(
        new RequestAbortedTime(
          new AbortedRequest(
            new HttpsRequest(
              options, new GeneratedRequestCallback(
                as('server')
              )
            )
          )
        )
      )
    ).after(
      new EndedRequest(
        new HttpsRequest(
          options, new GeneratedRequestCallback(
            as('server')
          )
        )
      )
    )
  )
).call();