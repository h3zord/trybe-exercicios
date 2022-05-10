const sum = require('./sum');

describe('The sum function', () => {
    it('returns 9 when sum (4, 5)', () => {
        expect(sum(4, 5)).toBe(9);
    });

    it('return 0 when sum (0, 0)', () => {
        expect(sum(0, 0)).toBe(0);
    });

    it("return error when sum (4, '5')", () => {
        expect(() => sum(4, "5")).toThrow(Error);
    });

    it("return message error when sum (4, '5')", () => {
        expect(() => sum(4, "5")).toThrow('parameters must be numbers');
    });

});