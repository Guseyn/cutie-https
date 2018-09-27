'use strict'

const {
  Agent
} = require('http');
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
  CreatedAgentConnection,
  ClosedServer,
  DestroyedAgent,
  HttpRequest,
  EndedRequest,
  SocketsOfAgent
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const agent = new Agent({ keepAlive: true });
const port = 8001;
const hostname = '127.0.0.1';
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET',
  agent: agent
};

class GeneratedRequestCallback extends AsyncObject {

  constructor(agent, socket, server, key) {
    super(agent, socket, server, key);
  }

  definedSyncCall() {
    return (agent, socket, server, key) => {
      return (res) => {
        new EqualAssertion(
          new HasOwnProperty(
            new SocketsOfAgent(agent), key
          ), true
        ).after(
          new DestroyedAgent(agent).after(
            new EqualAssertion(
              new HasOwnProperty(
                new SocketsOfAgent(agent), key
              ), true 
              /* 
                It's strange behavior. But DestroyedAgent works because connection don't hang.
                If you try this test without DestroyedAgent, the test will run a long time.
              */
            ).after(
              new DestroyedStream(socket).after(
                new ClosedServer(server).after(
                  new EqualAssertion(
                    new HasOwnProperty(
                      new SocketsOfAgent(agent), key
                    ), false
                  )
                )
              )
            )
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
          agent, {port: port}
        ).as('socket'), Socket
      )
    ).after(
      new EndedRequest(
        new HttpRequest(
          options, new GeneratedRequestCallback(
            agent, as('socket'), as('server'), `${hostname}:${port}:`
          )
        )
      )
    )
  )
).call();
