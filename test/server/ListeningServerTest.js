'use strict'

const {
  Server
} = require('http');
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
  CreatedHttpServer,
  ListeningServer,
  EndedRequest,
  EndedResponse,
  HttpRequest,
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
      new CreatedHttpServer(
        new RequestResponseEvent()
      ), port, hostname
    ).as('server'), Server
  )
).after(
  new EndedRequest(
    new HttpRequest(
      options, new GeneratedRequestCallback(
        as('server')
      )
    )
  )
).call();
