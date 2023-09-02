 function sumDivisibleBy3Or5(n) {
    let total = 0;
    
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        total += i;
      }
    }
    
    return total;
  }
  
  // Input (assuming n is a positive integer)
  const n = 15; // You can change this value as needed
  
  const result = sumDivisibleBy3Or5(n);
  console.log(`The sum of numbers between 1 and ${n} that are divisible by 3 or 5 is ${result}.`);
  