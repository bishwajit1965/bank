/* Get the values from hard-coded text field
============================================= */
function textFieldValueById(textFieldId) {
  const textField = document.getElementById(textFieldId);
  const textFieldString = textField.innerText;
  const textFieldValue = parseFloat(textFieldString);
  return textFieldValue;
}

/* Get the values from input field
=================================== */
function inputFieldValuesById(inputId) {
  const inputField = document.getElementById(inputId);
  const stringInputField = inputField.value;
  const inputFieldValue = parseFloat(stringInputField);
  inputField.value = "";
  return inputFieldValue;
}

/* Set the text element value
================================== */
function updateTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

/* For deposit calculation
========================== */
document.getElementById("btn-deposit").addEventListener("click", function () {
  const previousDeposits = textFieldValueById("deposit");
  const presentDepositAmount = inputFieldValuesById("deposit-money");
  const presentDeposit = previousDeposits + presentDepositAmount;
  updateTextElementValueById("deposit", presentDeposit);

  const previousBalance = textFieldValueById("initial-balance");
  const presentBalance = previousBalance + presentDepositAmount;
  updateTextElementValueById("initial-balance", presentBalance);
});

/* For withdraw calculation
=========================== */
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const presentWithdrawAmount = inputFieldValuesById("withdrawn-money");
  const previousBalance = textFieldValueById("initial-balance");
  const previousWithdrawal = textFieldValueById("withdrawn-amount");

  const presentWithdrawal = previousWithdrawal + presentWithdrawAmount;
  updateTextElementValueById("withdrawn-amount", presentWithdrawal);

  const balanceAfterWithdraw = previousBalance - presentWithdrawAmount;
  updateTextElementValueById("initial-balance", balanceAfterWithdraw);
});
