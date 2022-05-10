const myRemove = require('./myRemove');

describe('Testing function myRemove', () => {
    it('Making test 1', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ])
    });

    it('Making test 2', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([ 1, 2, 3, 4 ])
    });

    it('Making test 3', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([ 1, 2, 3, 4 ])
    });
});

