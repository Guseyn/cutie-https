'use strict'

const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  CreatedOptions
} = require('./../../index')

new DeepStrictEqualAssertion(
  new CreatedOptions('a', 1, 'b', 2, 'c', 3),
  { a: 1, b: 2, c: 3 }
).call()

try {
  new DeepStrictEqualAssertion(
    new CreatedOptions('a', 1, 'b', 2, 'c'),
    { a: 1, b: 2, c: 3 }
  ).call()
} catch (error) {
  new DeepStrictEqualAssertion(
    error, new Error('odd number of parameters for options')
  ).call()
}
