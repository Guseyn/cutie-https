'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  Agent
} = require('https')
const {
  CreatedHttpsAgent
} = require('./../../index')

new Assertion(
  new Is(
    new CreatedHttpsAgent(),
    Agent
  )
).call()
