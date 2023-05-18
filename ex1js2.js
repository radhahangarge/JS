// Define the total transaction amount
var transactionAmount = 1000; // Assuming the total transaction amount is $1000

// Calculate the fees
var transactionFee = 3;
var interestRate = 0.01;
var feeAmount = transactionAmount * interestRate;

// Calculate the total cost
var totalCost = transactionAmount + transactionFee + feeAmount;

// Display the total cost
console.log("Maria should pay $" + totalCost.toFixed(2) + " for the month.");
