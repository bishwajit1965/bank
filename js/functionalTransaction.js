/* Get the values from hard-coded text field
============================================= */
function textFieldValueById(textFieldId) {
    const textField = document.getElementById(textFieldId);
    const textFieldString = textField.innerText;
    const textFieldValue = parseFloat(textFieldString);
    return textFieldValue;
}

/* Get the values from input field
================================================= */
function inputFieldValuesById(inputId) {
    const inputField = document.getElementById(inputId);
    const stringInputField = inputField.value;
    if (stringInputField == "") {
        alert("Empty deposit input field !!!");
    } else {
        const inputFieldValue = parseFloat(stringInputField);
        inputField.value = "";
        return inputFieldValue;
    }
}

/* Set the text element value
================================================= */
function updateTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = parseFloat(newValue);
}

/* For deposit calculation
========================== */
document.getElementById("btn-deposit").addEventListener("click", function() {
    const previousDeposits = textFieldValueById("deposit");
    const presentDepositAmount = inputFieldValuesById("deposit-money");
    const presentDeposit = previousDeposits + presentDepositAmount;
    updateTextElementValueById("deposit", presentDeposit.toFixed(2));
    const previousBalance = textFieldValueById("initial-balance");
    const presentBalance = previousBalance + presentDepositAmount;
    updateTextElementValueById("initial-balance", presentBalance.toFixed(2));
});

/* For withdraw calculation
=========================== */
document.getElementById("btn-withdraw").addEventListener("click", function() {
    const presentWithdrawAmount = inputFieldValuesById("withdrawn-money");
    const previousBalance = textFieldValueById("initial-balance");
    const previousWithdrawal = textFieldValueById("withdrawn-amount");

    if (previousBalance < presentWithdrawAmount) {
        alert(
            `Insufficient balance!! ${presentWithdrawAmount} is greater than balance.`
        );
        return;
    } else {
        const balanceAfterWithdraw = previousBalance - presentWithdrawAmount;
        updateTextElementValueById(
            "initial-balance",
            balanceAfterWithdraw.toFixed(2)
        );
        const presentWithdrawal = previousWithdrawal + presentWithdrawAmount;
        updateTextElementValueById(
            "withdrawn-amount",
            presentWithdrawal.toFixed(2)
        );
    }
});