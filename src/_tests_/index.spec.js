const { myFunction } = require('../index');

it('should return "world" when passed "hello"', () => {
    expect(myFunction('hello')).toBe('world');
});