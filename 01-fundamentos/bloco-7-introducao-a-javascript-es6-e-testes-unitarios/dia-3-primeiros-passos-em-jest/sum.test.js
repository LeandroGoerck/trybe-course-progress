const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const {sum, myRemove, myFizzBuzz} = require('./sum');


  it('adds 4 + 5 to equal 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('adds 0 + 0 to equal 0 ', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('throw an error when add 4 + "5"', () => {
    expect(() => sum(4, "5")).toThrowError('parameters must be numbers');
  });

  it('removes 3 from the array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  
  it('dont return [1, 2, 3, 4] when removes 3 from the array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('returns the same array when trys to remove 5 from the array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })

  it('divides 15 by 3 and 5 and expect fizzbuzz', () => {
    expect( myFizzBuzz(15) ).toBe('fizzbuzz');
  })

  it('divides 9 by 3 and expect fizz', () => {
    expect( myFizzBuzz(9) ).toBe('fizz');
  })

  it('divides 10 by 5 and expect buzz', () => {
    expect( myFizzBuzz(10) ).toBe('buzz');
  })

  it('trys fizzbuzz with number 8 and expect 8', () => {
    expect( myFizzBuzz(8) ).toBe(8);
  })

  it('trys fizzbuzz with char a and expect false', () => {
    expect( myFizzBuzz('a') ).toBeFalsy();
  })