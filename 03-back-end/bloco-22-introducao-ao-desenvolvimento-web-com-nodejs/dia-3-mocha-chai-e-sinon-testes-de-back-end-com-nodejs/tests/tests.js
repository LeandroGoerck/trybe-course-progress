const describeNumbers = require('../lib/tests');

const expect = require('chai').expect;


describe('test numbers', () => {
  it('tests if 2 is positive', () => {
    
    expect(describeNumbers(2)).to.be.equal('positive');
  });

  it('tests if -1 is negative', () => {
    expect(describeNumbers(-1)).to.be.equal('negative');
  });

  it('tests if 0 is neutral', () => {
    expect(describeNumbers(0)).to.be.equal('neutral');
  });

})