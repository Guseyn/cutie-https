'use strict'

const {
  Server
} = require('https');
const {
  as, AsyncObject
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  IsObject
} = require('@cuties/is');
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('@cuties/process');
const {
  ClosedServer,
  ResponseFromHttpsRequest,
  ResponseHeaders
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8089;
const hostname = '127.0.0.1';
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
};

new KilledProcess(
  new Pid(
    new FoundProcessOnPort(port)
  ), 'SIGHUP'
).after(
  FakeServer(port).as('server').after(
    new Assertion(
      new IsObject(
        new ResponseHeaders(
          new ResponseFromHttpsRequest(options, '{requestBody}')
        )
      )
    ).after(
      new ClosedServer(as('server'))
    )
  )
).call();
