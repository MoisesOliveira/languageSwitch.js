const chooseLanguage = require('./chooseLanguage.js')


let createSelectElement = (languagesArray) =>{
    let selectElement = document.createElement('select')
    selectElement.className = "language-select"
   document.body.append(selectElement)

  let defaultOption = document.createElement('option')
  defaultOption.value = -1
  defaultOption.text = '------  -----'
  selectElement.appendChild(defaultOption)

    for(let i = 0; i<languagesArray.length; i++){
        let options = document.createElement('option')
        options.value = i
        options.text = languagesArray[i]['name']
        selectElement.appendChild(options)
    }
    selectElement.addEventListener('change', (event) =>{
        chooseLanguage(event, languagesArray)
    })
}

module.exports = createSelectElement;