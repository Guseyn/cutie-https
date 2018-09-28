'use strict'

const {
  Server
} = require('https');
const {
  as, AsyncObject, Event
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  ReadDataByPath
} = require('@cuties/fs');
const {
  CreatedHttpsServer,
  CreatedOptions,
  ListeningServer,
  EndedRequest,
  EndedResponse,
  HttpsRequest,
  ClosedServer
} = require('./../../index');

const port = 8074;
const hostname = '127.0.0.1';
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
};

class RequestResponseEvent extends Event {

  constructor() {
    super();
  }

  definedBody(request, response) {
    // handle request
    new EndedResponse(response, 'fake response').call();
  }

}

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

new Assertion(
  new Is(
    new ListeningServer(
      new CreatedHttpsServer(
        new CreatedOptions(
          'key', new ReadDataByPath('./src/key.pem'),
          'cert', new ReadDataByPath('./src/cert.pem')
        ),
        new RequestResponseEvent()
      ), port, hostname
    ).as('server'), Server
  )
).after(
  new EndedRequest(
    new HttpsRequest(
      options, new GeneratedRequestCallback(
        as('server')
      )
    )
  )
).call();
