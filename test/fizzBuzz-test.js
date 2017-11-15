const expect = require('chai').expect;
const fizzBuzz = require('../src/fizzBuzz');

describe('fizzBuzz-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return all FizzBuzz patterns for argument 20', () => {
    const actual = fizzBuzz(20);
    expect(actual.length).to.eql(20);
    expect(actual[0]).to.eql(1);
    expect(actual[1]).to.eql(2);
    expect(actual[2]).to.eql('Fizz');
    expect(actual[3]).to.eql(4);
    expect(actual[4]).to.eql('Buzz');
    expect(actual[5]).to.eql('Fizz');
    expect(actual[6]).to.eql(7);
    expect(actual[7]).to.eql(8);
    expect(actual[8]).to.eql('Fizz');
    expect(actual[9]).to.eql('Buzz');
    expect(actual[10]).to.eql(11);
    expect(actual[11]).to.eql('Fizz');
    expect(actual[12]).to.eql(13);
    expect(actual[13]).to.eql(14);
    expect(actual[14]).to.eql('FizzBuzz');
    expect(actual[15]).to.eql(16);
    expect(actual[16]).to.eql(17);
    expect(actual[17]).to.eql('Fizz');
    expect(actual[18]).to.eql(19);
    expect(actual[19]).to.eql('Buzz');
  });
});
