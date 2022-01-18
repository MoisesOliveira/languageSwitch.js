/**
 * @description Change HTML element's text to desired according content in Array of Languages
 * @param {*} specifiedLanguage - Specify which index in languages array you desire.
 * @param {*} languagesArray Array containing all Languages and it properties
 */
let changeLanguage = (specifiedLanguage, languagesArray) =>{

    for(properties in languages[specifiedLanguage]){

        let elements = document.getElementsByClassName(`${properties}`)
        
        for(let i = 0; i<elements.length; i++){
            elements[i].innerHTML = languagesArray[specifiedLanguage][properties]
        }
    }
}

module.exports = changeLanguage;

