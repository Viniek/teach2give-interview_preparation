const fizz = require('../fizz');

describe('fizz function', () => {
    it('returns "fizz" for multiples of 3', () => {
        expect(fizz(3)).toBe('fizz');
        expect(fizz(6)).toBe('fizz');
        expect(fizz(9)).toBe('fizz');
    });

    it('returns "buzz" for multiples of 5', () => {
        expect(fizz(5)).toBe('buzz');
        expect(fizz(10)).toBe('buzz');
        expect(fizz(20)).toBe('buzz');
    });

    it('returns "fizzBuzz" for multiples of both 3 and 5', () => {
        expect(fizz(15)).toBe('fizzBuzz');
        expect(fizz(30)).toBe('fizzBuzz');
        expect(fizz(45)).toBe('fizzBuzz');
    });

    it('returns the number for non-multiples of 3 or 5', () => {
        expect(fizz(1)).toBe(1);
        expect(fizz(2)).toBe(2);
        expect(fizz(4)).toBe(4);
    });
});
