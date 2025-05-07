window.onload = () => {
  let IncomeBalance = document.getElementById("IncomeBalance").innerText;
  let ExpenceBalance = document.getElementById("ExpenceBalance").innerText;
  console.log(IncomeBalance);
  let ShowBalance = IncomeBalance - ExpenceBalance;

  document.getElementById("IncomeBalance").innerHTML = `₹ ${IncomeBalance}`;
  document.getElementById("ExpenceBalance").innerHTML = `₹ ${ExpenceBalance}`;

  document.getElementById("ShowBalance").innerHTML = `₹ ${ShowBalance}`;
};

document.getElementById("IncomeDiv").addEventListener("click", () => {
  let UserChoise = window.confirm(
    `Do You Want to Increase Or Decrease Income Amount...?...  \n "Click" Ok To Update Amount... \n "Click Cancel To Stay with This Amount...`
  );
  if (UserChoise) {
    window.location.href = "/ExpenseTracker/Assets/Pages/IncomeUpdate.html";
    return;
  }
});
