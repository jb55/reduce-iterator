'use strict';

module.exports = reduceIterator;

function reduceIterator(xs, reducer, acc){
  let first = true;
  let prev = acc

  for (let x of xs) {
    if (first) {
      first = false;
      if (arguments.length < 3) {
        prev = x;
        continue;
      }
    }
    prev = reducer(prev, x)
  }

  return prev;
}
