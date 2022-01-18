const chooseLanguage = require('./chooseLanguage.js')


let createSelectElement = (languagesArray) =>{
    let selectElement = document.createElement('select')

    document.body.appendChild(selectElement)

    for(let i = 0; i<languagesArray.length; i++){
        let options = document.createElement('option')
        options.value = i
        options.text = languagesArray[i]['name']
        selectElement.appendChild(options)
    }
    selectElement.addEventListener('change', (event) =>{
        chooseLanguage(event)
    })
}

module.exports = createSelectElement;