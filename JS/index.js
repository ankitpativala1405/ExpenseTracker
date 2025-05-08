window.onload = () => {
  let IncomeBalance = document.getElementById("IncomeBalance").innerText;
  let ExpenceBalance = document.getElementById("ExpenceBalance").innerText;
  console.log(IncomeBalance);
  let ShowBalance = IncomeBalance - ExpenceBalance;

  document.getElementById("IncomeBalance").innerHTML = `₹ ${IncomeBalance}`;
  document.getElementById("ExpenceBalance").innerHTML = `₹ ${ExpenceBalance}`;

  document.getElementById("ShowBalance").innerHTML = `₹ ${ShowBalance}`;

  document.getElementById("date").valueAsDate = new Date();
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

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

document.getElementById("addtransactionform").addEventListener("submit", () => {
  let description = document.getElementById("description").value;
  let category = document.getElementById("category").value;
  let date = document.getElementById("date").value;
  let amount = document.getElementById("amount").value;

  let transaction = {
    id: Date.now(),
    description: description,
    category: category,
    date: date,
    amount: amount,
    timestamp: new Date().getDate(),
  };

  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));
});

const Uimaker = () => {
  document.getElementById("transactionList").innerHTML = "";

  transactions.map((ele) => {
    console.log("ele", ele);

    let li = document.createElement("li");

    let descSpan = document.createElement("span");
    descSpan.innerHTML = `${ele.category} <small class="text-muted">${ele.description}</small>`;

    let amountSpan = document.createElement("span");
    amountSpan.classList.add("expense");
    amountSpan.textContent = `- ₹${ele.amount}`;

    li.append(descSpan, amountSpan);

    ExpenceBalance = ExpenceBalance + ele.amount;
    document.getElementById("transactionList").appendChild(li);
  });

};

Uimaker();
