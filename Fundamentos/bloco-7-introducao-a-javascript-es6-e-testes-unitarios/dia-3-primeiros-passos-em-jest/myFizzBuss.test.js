const myFizzBuzz = require('./myFizzBuzz');

describe('Testing function myFizzBuss', () => {
    it('Testing requirement 1', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    });

    it('Testing requirement 2', () => {
        expect(myFizzBuzz(9)).toBe('fizz')
    });

    it('Testing requirement 3', () => {
        expect(myFizzBuzz(10)).toBe('buzz')
    });

    it('Testing requirement 4', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });

    it('Testing requirement 5', () => {
        expect(myFizzBuzz('a')).toBe(false);
    });
});