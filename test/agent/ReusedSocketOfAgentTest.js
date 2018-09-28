'use strict'

const {
  Agent
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
  DestroyedStream
} = require('@cuties/stream');
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('@cuties/process');
const {
  HasOwnProperty
} = require('@cuties/object');
const {
  ReadDataByPath
} = require('@cuties/fs');
const {
  CreatedAgentConnection,
  CreatedAgent,
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

const port = 8007;
const hostname = '127.0.0.1';
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
};

class GeneratedRequestCallback extends AsyncObject {

  constructor(agent, socket, server) {
    super(agent, socket, server);
  }

  definedSyncCall() {
    return (agent, socket, server) => {
      return (res) => {
        new DestroyedAgent(agent).after(
          new DestroyedStream(socket).after(
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
    new Assertion(
      new Is(
        new CreatedAgentConnection(
          new CreatedAgent(
            new CreatedOptions(
              'keepAlive', true,
              'cert', new ReadDataByPath('./src/cert.pem')
            )
          ).as('agent'), {port: port}
        ).as('socket'), Socket
      )
    ).after(
      new Assertion(
        new Is(
          new ReusedSocketOfAgent(
            as('agent'), as('socket'),
            new EndedRequest(
              new HttpsRequest(
                new OptionsWithAgent(options, as('agent')), new GeneratedRequestCallback(
                  as('agent'), as('socket'), as('server')
                )
              )
            )
          ), Socket
        )
      )
    )
  )
)//.call();
