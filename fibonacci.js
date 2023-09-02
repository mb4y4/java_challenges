function fibonacci_sequence(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const sequence = [0, 1];
      
      for (let i = 2; i < n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
      }
      
      return sequence;
    }
  }
  
  // Example usage:
  const n = 10;
  const fibonacciNumbers = fibonacci_sequence(n);
  console.log(fibonacciNumbers);
  