const languageMocks = require('./mock/languages.mock.js')


const getLangs = (languages) =>{
    for(language in languages){
        console.log(languages[language])
    }
}



/*test('should return the language specified', () => {
    expect(
        languageMocks.pt_br.name).toBe('pt-bre')
})
*/

getLangs(languageMocks)
