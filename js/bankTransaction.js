/* Deposit money
================*/
document.getElementById("btn-deposit").addEventListener("click", function () {
  const iniBalance = document.getElementById("deposit").innerText;
  const depositedMoney = document.getElementById("deposited-money").value;

  if (isNaN(parseFloat(depositedMoney))) {
    alert("EMPTY !!! or invalid input.");
    const value = document.getElementById("deposited-money");
    value.value = "";
    return;
  } else if (parseFloat(depositedMoney) <= 0) {
    alert("negative");
    const value = document.getElementById("deposited-money");
    value.value = "";
    return;
  } else {
    const total = parseFloat(iniBalance) + parseFloat(depositedMoney);
    document.getElementById("deposit").innerHTML = total;

    //Initial balance
    const initialBalance = document.getElementById("initial-balance").innerText;

    const updatedBalance =
      parseFloat(initialBalance) + parseFloat(depositedMoney);

    document.getElementById("initial-balance").innerHTML = updatedBalance;
    const value = document.getElementById("deposited-money");
    value.value = "";
  }
});

/* Withdraw money
================== */
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const iniBalance = document.getElementById("withdrawn-amount").innerText;
  let formattedInitialBalance = parseFloat(iniBalance);

  const withdrawnMoney = document.getElementById("withdrawn-money").value;

  let formattedWithdrawnMoney = parseFloat(withdrawnMoney);

  //Initial balance
  const initialBalance = document.getElementById("initial-balance").innerText;

  const formattedPresentBalance = parseFloat(initialBalance);

  // Validate overdrawn
  if (formattedPresentBalance < formattedWithdrawnMoney) {
    alert(
      "Overdrawn is impossible !!! " +
        "$" +
        formattedWithdrawnMoney +
        " is not available in your account now !!!"
    );
    const value = document.getElementById("withdrawn-money");
    value.value = "";
    return;
  } else if (formattedWithdrawnMoney <= 0) {
    alert("You can not input negative or a zero value !!!");
    const value = document.getElementById("withdrawn-money");
    value.value = "";
    return;
  } else if (isNaN(formattedWithdrawnMoney)) {
    alert("EMPTY ot Invalid input !!! Please input valid amount in number.");
    const value = document.getElementById("withdrawn-money");
    value.value = "";
  } else {
    const presentBalance = formattedInitialBalance + formattedWithdrawnMoney;

    document.getElementById("withdrawn-amount").innerHTML = presentBalance;

    const updatedBalance =
      parseFloat(initialBalance) - parseFloat(withdrawnMoney);

    document.getElementById("initial-balance").innerHTML = updatedBalance;
    const value = document.getElementById("withdrawn-money");
    value.value = "";
  }
});
