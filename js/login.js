/* Step no-1
========================== */
document.getElementById("btn-submit").addEventListener("click", function () {
  // Step-2 Getting the input fields values email & password
  const emailAddress = document.getElementById("user-email");
  const email = emailAddress.value;
  const userPassword = document.getElementById("user-password");
  const password = userPassword.value;
  if (email === "pew@gmail.com" && password === "password") {
    window.location.href = "bank.html";
    alert("User is logged in!!");
  } else {
    alert("Invalid email or password!!");
  }
});
