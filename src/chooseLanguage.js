const changeLanguage = require("./changeLanguage")
/**
 * @description When placed on a HTML Event, it will return the value of the selected language index.
 * @param {*} event Should be placed the event parameter of the HTML Element
 * @param {*} languagesArray Array containing all Languages and it properties
 */
let chooseLanguage = (event, languagesArray) =>{
    let selectedLanguage = event.target.value
    changeLanguage(selectedLanguage, languagesArray)
}

module.exports = chooseLanguage;