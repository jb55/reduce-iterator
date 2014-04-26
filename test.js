'use strict';

let expect = require('expect.js')
let take = require('take-generator');
let range = require('range-generator');
let reduce = require('./');
let nats = require('naturals');

describe('reduce-generator', function(){
  it('reduces without init value', function(){
    let zeroToFour = take(nats, 5);
    let reduced = reduce(zeroToFour, function(acc, val) { return acc + val; });
    expect(reduced).to.be(10);
  });

  it('reduces with init value', function(){
    let zeroToFour = take(nats, 5);
    let reduced = reduce(zeroToFour, function(acc, val) { return acc + val; }, 1);
    expect(reduced).to.be(11);
  });

  it('reduces with generator object', function(){
    let zeroToFour = take(nats, 5);
    let reduced = reduce(zeroToFour(), function(acc, val) { return acc + val; });
    expect(reduced).to.be(10);
  });

  it('range example works', function(){
    var reduced = reduce(range(0, 3), function(acc, x){ return acc + x; })
    expect(reduced).to.be(3);
  });
});
