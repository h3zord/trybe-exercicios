const {encode, decode } = require('./Encode-Decode');

describe('Testing functions encode and decode', () => {
    it('Testing requirement 1', () => {
        expect(typeof encode).toEqual('function')
        expect(typeof decode).toBe('function')
    });

    it('Testing requirement 2', () => {
        expect(encode('aeiou')).toBe('12345')
    });

    it('Testing requirement 3', () => {
        expect(decode('12345')).toBe('aeiou')
    });

    it('Testing requirement 4', () => {
        expect(encode('bcd')).toBe('bcd')
        expect(decode('678')).toBe('678')
    });

    it('Testing requirement 5', () => {
        expect(encode('aeio').length).toBe(4)
        expect(decode('123').length).toBe(3)
    });    
});