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

// add, capitalize, words, filter, divide, isEmpty, ceil, drop, toInteger, toString

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

describe('filter.js', () => {
    it('', async () => {
    });
});
describe('divide.js', () => {
    it('', async () => {
    });
});
describe('isEmpty.js', () => {
    it('', async () => {
    });
});
describe('ceil.js', () => {
    it('', async () => {
    });
});
describe('drop.js', () => {
    it('', async () => {
    });
});
describe('toInteger.js', () => {
    it('', async () => {
    });
});
describe('toString.js', () => {
    it('', async () => {
    });
});