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
  Is
} = require('@cuties/is');
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('@cuties/process');
const {
  ClosedServer,
  ResponseFromHttpsRequest,
  ResponseBody
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8086;
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
      new Is(
        new ResponseBody(
          new ResponseFromHttpsRequest(options, '{requestBody}')
        ),
        Buffer
      )
    ).after(
      new ClosedServer(as('server'))
    )
  )
).call();
