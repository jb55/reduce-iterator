'use strict';

let isGen = require('is-generator');

module.exports = reduceGeneratorFn;

function reduceGeneratorFn(gen, reducer, acc){
  let first = true;
  let prev = acc;
  gen = isGen.fn(gen)? gen() : gen;

  for (let x of gen) {
    if (first) {
      first = false;
      if (arguments.length < 3)
        prev = x;
    }
    prev = reducer(prev, x)
  }

  return prev;
}
