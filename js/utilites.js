function getInputValue(input, errorInputField) {
    // get input field
    const inputField = document.getElementById(input);
    // get input value as string
    const inputString = inputField.value;
    let inputFieldValue;
    // checking input value number or string or empty
    if (!isNaN(inputString) && inputString !== "") {
        // get input value as a number
        inputFieldValue = parseFloat(inputString);
    } else {
        alert(`Please Provide Valid ${errorInputField} Number!`);
        return 0;
    }
    return inputFieldValue;
}

function getTotal(txtField, txtValue) {
    // get text field
    const textField = document.getElementById(txtField);
    // get input value as string
    const textFieldString = textField.innerText;
    // get input value as a number
    const textFieldValue = parseFloat(textFieldString);
    // checking txtValue has or not
    if (txtValue) {
        // added txtValue to the textField
        textField.innerText = txtValue;
    }
    return textFieldValue;
}