// deposit and withdraw input field called using function
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputFieldValueString = inputField.value
    const inputFieldValue = parseFloat(inputFieldValueString)
    inputField.value = ''
    return inputFieldValue
}

// get deposit, withdwrow and total balance text field 
function getTextFieldValueById(textFieldId){
    const textFieldElement = document.getElementById(textFieldId)
    const textFieldElementString = textFieldElement.innerText
    const textFieldElementValue = parseFloat(textFieldElementString)
    return textFieldElementValue
}

// set the value on deposit, withdraw and total amount text field
function setTextElelmentValueById(textFieldId, newValue){
    const textElement = document.getElementById(textFieldId)
    textElement.innerText = newValue
}