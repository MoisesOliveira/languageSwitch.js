const greet = require('../src/index.js')

test('should greet', () => {
    expect(greet()).toBe("Greetings")
})
