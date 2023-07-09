function calculateTip() {
    var billTotal = parseFloat(document.getElementById("billTotal").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
  
    if (isNaN(billTotal) || isNaN(tipPercentage) || billTotal <= 0) {
      alert("Invalid input. Please enter valid values.");
      return;
    }
  
    var tipAmount = (billTotal * tipPercentage) / 100;
    var totalAmount = billTotal + tipAmount;
  
    document.getElementById("tipAmount").innerHTML = "Tip Amount: $" + tipAmount.toFixed(2);
    document.getElementById("totalAmount").innerHTML = "Total Amount: $" + totalAmount.toFixed(2);
  }
  
  function splitBill() {
    var totalAmount = parseFloat(document.getElementById("totalAmount").textContent.split("$")[1]);
    var numPeople = parseInt(document.getElementById("numPeople").value);
  
    if (isNaN(totalAmount) || isNaN(numPeople) || numPeople <= 0) {
      alert("Invalid input. Please enter valid values.");
      return;
    }
  
    var splitAmount = totalAmount / numPeople;
  
    document.getElementById("splitAmount").innerHTML = "Amount per Person: $" + splitAmount.toFixed(2);
  }
  
  function clearFields() {
    document.getElementById("billTotal").value = "";
    document.getElementById("tipPercentage").selectedIndex = 0;
    document.getElementById("numPeople").value = "";
    document.getElementById("tipAmount").innerHTML = "";
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("splitAmount").innerHTML = "";
  }
