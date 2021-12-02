import add from '../src/add.js';
import capitalize from '../src/capitalize.js';
import words from '../src/words.js';
import filter from '../src/filter.js';
import divide from '../src/divide.js';
import isEmpty from '../src/isEmpty.js';
import ceil from '../src/ceil.js';
import drop from '../src/drop.js';
import toInteger from '../src/toInteger.js';
import toString from '../src/toString.js';

import { expect } from 'chai';

describe('add.js', () => {
    it('should return a number', async () => {
        const augend = 4;
        const addend = 6;
        const total = add(augend, addend);
        expect(total).to.be.a('number');
    });
    it('should return 10 with parameters 4, 6', async () => {
        const augend = 4;
        const addend = 6;
        const total = add(augend, addend);
        expect(total).to.equal(10);
    });
    it('should return 5 with parameters -1, 5', async () => {
        const augend = -1;
        const addend = 6;
        const total = add(augend, addend);
        expect(total).to.equal(5);
    });
});

describe('capitalize.js', () => {
    it('should return a string', async () => {
        const string = 'FRED';
        const capitalized = capitalize(string);
        expect(capitalized).to.be.a('string');
    });
    it('should return "Fred" with parameter "FRED"', async () => {
        const string = 'FRED';
        const capitalized = capitalize(string);
        expect(capitalized).to.equal('Fred');
    });
    it('should return "Joe" with parameter "joe"', async () => {
        const string = 'joe';
        const capitalized = capitalize(string);
        expect(capitalized).to.equal('Joe');
    });
});

describe('words.js', () => {
    it('should return an array', async () => {
        const string = 'fred, barney, & pebbles';
        const wordsArray = words(string);
        expect(wordsArray).to.be.a('array');
    });
    it('should return an array with a length of 3', async () => {
        const string = 'fred, barney, & pebbles';
        const wordsArray = words(string);
        expect(wordsArray).to.have.lengthOf(3);
    });
    it('should return an array with a length of 4', async () => {
        const string = 'fred, barney, & pebbles';
        const regExp = /[^, ]+/g;
        const wordsArray = words(string, regExp);
        expect(wordsArray).to.have.lengthOf(4);
    });
});

describe('filter.js', () => {
    it('should return an array', async () => {
        const array = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false }
        ];
        const filtered = filter(array, ({ active }) => active);
        expect(filtered).to.be.a('array');
    });
    it('should return an array with a length of 1', async () => {
        const array = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false }
        ];
        const filtered = filter(array, ({ active }) => active);
        expect(filtered).to.have.lengthOf(1);
    });
    it('should return an array with a length of 2', async () => {
        const array = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false },
            { 'user': 'alice', 'active': true },
            { 'user': 'bob', 'active': false },
        ];
        const filtered = filter(array, ({ active }) => active);
        expect(filtered).to.have.lengthOf(2);
    });
});

describe('divide.js', () => {
    it('should return 1 with parameters 10 and 10', async () => {
        const dividend = 10;
        const divisor = 10;
        const quotient = divide(dividend, divisor);
        expect(quotient).to.equal(1);
    });
    it('should return 2 with parameters 10 and 5', async () => {
        const dividend = 10;
        const divisor = 5;
        const quotient = divide(dividend, divisor);
        expect(quotient).to.equal(2);
    });
    it('should return 1 with parameters 20 and 5', async () => {
        const dividend = 20;
        const divisor = 5;
        const quotient = divide(dividend, divisor);
        expect(quotient).to.equal(4);
    });
});

describe('isEmpty.js', () => {
    it('should return true with parameter null', async () => {
        const value = null;
        const empty = isEmpty(value);
        expect(empty).to.be.true;
    });
    it('should return false with a value as parameter', async () => {
        const value = 'deez nuts';
        const empty = isEmpty(value);
        expect(empty).to.be.false;
    });
    it('should return false with an array that has elements', async () => {
        const value = ['deez', 'nuts', 'ha', 'gottem'];
        const empty = isEmpty(value);
        expect(empty).to.be.false;
    });
    it('should return true with an empty array', async () => {
        const value = [];
        const empty = isEmpty(value);
        expect(empty).to.be.true;
    });
});
describe('ceil.js', () => {
    it('should return a number', async () => {
        const number = 4.006;
        const ceiling = ceil(number);
        expect(ceiling).to.be.a('number');
    } )
    it('should return 5 with number 4.006', async () => {
        const number = 4.006;
        const ceiling = ceil(number);
        expect(ceiling).to.be.equal(5);
    });
    it('should return 6.01 with number 6.004 and precision 2', async () => {
        const number = 6.004;
        const precision = 2;
        const ceiling = ceil(number, precision);
        expect(ceiling).to.be.equal(6.01);
    });
    it('should return 6100 with number 6040 and precision -2', async () => {
        const number = 6040;
        const precision = -2;
        const ceiling = ceil(number, precision);
        expect(ceiling).to.be.equal(6100);
    });
});

describe('drop.js', () => {
    it('should return [2, 3] with parameter [1, 2, 3] and 1', async () => {
        const arr = [1, 2, 3];
        const amountToDrop = 1;
        const dropped = drop(arr, amountToDrop);
        expect(dropped).to.include(2, 3);
    });
    it('should return [3] with parameter [1, 2, 3] and 2', async () => {
        const arr = [1, 2, 3];
        const amountToDrop = 2;
        const dropped = drop(arr, amountToDrop);
        expect(dropped).to.include(3);
    });
});
describe('toInteger.js', () => {
    it('should return number', async () => {
        const floatNumber = '';
        const integerResult = toInteger(floatNumber);
        expect(integerResult).to.be.a('number');
    });
    it('should return 3 with float 3.2', async () => {
        const floatNumber = 3.2;
        const integerResult = toInteger(floatNumber);
        expect(integerResult).to.equal(3);
    });
    it('should return 10 with float 10.123951', async () => {
        const floatNumber = 10.123951;
        const integerResult = toInteger(floatNumber);
        expect(integerResult).to.equal(10);
    });
    it('should return 0 with a string as parameter', async () => {
        const floatNumber = "my name jeff";
        const integerResult = toInteger(floatNumber);
        expect(integerResult).to.equal(10);
    });
});
describe('toString.js', () => {
    it('should return a string', async () => {
        const input = 1;
        const resultString = toString(input);
        expect(resultString).to.be.a('string');
    });
    it('should return "123" with input 123', async () => {
        const input = 123;
        const resultString = toString(input);
        expect(resultString).to.equal('123');
    });
    it('should return "1,2,3" with input [1, 2, 3]', async () => {
        const input = [1, 2, 3];
        const resultString = toString(input);
        expect(resultString).to.equal('1,2,3');
    });
    it('should return empty string with input null', async () => {
        const input = null;
        const resultString = toString(input);
        expect(resultString).to.equal('');
    });
});