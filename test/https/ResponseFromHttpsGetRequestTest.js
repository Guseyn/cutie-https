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
  AreBuffersEqual
} = require('@cuties/buffer');
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('@cuties/process');
const {
  ClosedServer,
  ResponseFromHttpsGetRequest,
  ResponseBody
} = require('./../../index');
const {
  FakeServer
} = require('./../../fake');

const port = 8087;
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
      new AreBuffersEqual(
        new ResponseBody(
          new ResponseFromHttpsGetRequest(options)
        ),
        Buffer.from('fake response')
      )
    ).after(
      new ClosedServer(as('server'))
    )
  )
).call();
