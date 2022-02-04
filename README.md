![Tests](https://github.com/MoisesOliveira/languageSwitch.js/actions/workflows/node.js.yml/badge.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)



# languageSwitch.js
Craete multi-language content inside you web app very easily with this library. 🌞

## How to install:
```
npm install languageswitch
```
## How to use:

This library is best suited at the moment to be used with React or other JS framework.

There are three main functions:

#### 1) createSelectElement
```javascript
createSelectElement(array)
// array variable containing all languages content
```
This function generates a HTML `<select>` element inside the Body with all options listed in the variable as a parameter

#### 2) chooseLangauge
```javascript
chooseLanguage(event, array)
// event - HTML Select events such as submit, change etc
// array - array variable containing all languages content
```
Set a selected value according to its array parameter variable to the third function which changes all HTML element's content listed.

Place inside your own HTML select element if don't want use the `<select>` generator function above.

#### 3) changeLanguage

```javascript
changeLanguage(specifiedLanguageIndex, array)
// specifiedLanguageIndex - your desired index from the array
// array - array variable containing all languages content
```` 

This is the function which changes the HTML elements inner content.

This function is also much more internal, so you don't have to worry about it.

