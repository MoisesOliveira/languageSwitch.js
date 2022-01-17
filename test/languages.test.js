const languageMock = require('./mock/languages.mock.js')


test('should return the language specified', () => {
    expect(
        languageMock[0]['name']).toBe('pt-br')
})
