'use strict';

let expect = require('expect.js')
let take = require('take-generator');
let range = require('range-generator');
let reduce = require('./');
let nats = require('naturals');

function plus(a, b) {
  return a + b;
}

describe('reduce-generator', function(){
  it('reduces without init value', function(){
    let zeroToFour = take(nats, 5);
    let reduced = reduce(zeroToFour, plus);
    expect(reduced).to.be(10);
  });

  it('reduces with init value', function(){
    let zeroToFour = take(nats, 5);
    let reduced = reduce(zeroToFour, plus, 1);
    expect(reduced).to.be(11);
  });

  it('reduces with generator object', function(){
    let zeroToFour = take(nats, 5);
    let reduced = reduce(zeroToFour(), plus);
    expect(reduced).to.be(10);
  });

  it('range example works', function(){
    var reduced = reduce(range(0, 3), plus)
    expect(reduced).to.be(3);
  });

  it('works starting with 1', function(){
    var reduced = reduce(range(1, 4), plus)
    expect(reduced).to.be(6);
  });

  it('works 1 to 3, with init 1', function(){
    var reduced = reduce(range(1, 4), plus, 1)
    expect(reduced).to.be(7);
  });

});
