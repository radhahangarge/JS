let xValue = 5;

while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
}

let number = 1;

while (number <= 100) {
  console.log(number);
  number += 2;
}


function printInSquareBrackets(n) {
    let number = 1;
  
    while (number <= n) {
      console.log(`[${number}]`);
      number++;
    }
  }
  
  printInSquareBrackets(6);


  function computeSumOfPositiveIntegers(n) {
    let sum = 0;
    let number = 1;
  
    while (number <= n) {
      sum += number;
      number++;
    }
  
    return sum;
  }
  
  console.log(computeSumOfPositiveIntegers(5)); // Output: 15
  console.log(computeSumOfPositiveIntegers(19)); // Output: 190
  
  