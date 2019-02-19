'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  CreatedAgent,
  CreatedOptions,
  OptionsWithAgent
} = require('./../../index')

new Assertion(
  new IsObject(
    new OptionsWithAgent(
      new CreatedOptions('a', 1, 'b', 2, 'c', 3),
      new CreatedAgent()
    )
  )
).call()
