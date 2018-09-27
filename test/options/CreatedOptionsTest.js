'use strict'

const {
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  CreatedOptions
} = require('./../../index');

new DeepEqualAssertion(
  new CreatedOptions('a', 1, 'b', 2, 'c', 3),
  {a: 1, b: 2, c: 3}
).call();
