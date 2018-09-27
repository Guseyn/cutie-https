'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is  
} = require('@cuties/is');
const {
  Agent
} = require('https');
const {
  CreatedAgent
} = require('./../../index');

new Assertion(
  new Is(
    new CreatedAgent(),
    Agent
  )
).call()
