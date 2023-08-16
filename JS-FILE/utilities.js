function getInputFieldValueById(inputFieldId) {
    const inputField =document.getElementById(inputFieldId)
    const inputFieldStringAmount = inputField.value 
    const inputFieldNumberAmountValue = parseFloat(inputFieldStringAmount)
    inputField.value = ""
    return inputFieldNumberAmountValue
}

function getTextElemnetValueById(elementId) {
    const textElement = document.getElementById(elementId)
    const getTextElementString = textElement.innerText
    const getTextElementNumberValue = parseFloat(getTextElementString)
    return getTextElementNumberValue
}

// set function for calculating amount

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue
}
