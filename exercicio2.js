const givenNumber = 10; // YOU CAN CHANGE THIS NUMBER FOR TESTING CASES

function fibonacci(value) {
  let prevValue = 0;
  let nextValue = 1;
  let sum = 0;
  let numberExistsInSequence = false;

  if (value < 0) {
    return "Not allowed negative numbers, enter a value greater or equal to zero";
  } else if (value === 0) {
    numberExistsInSequence = true;
  } else if (value === 1) {
    numberExistsInSequence = true;
  } else {
    for (let i = 1; i <= value; i++) {
      sum = prevValue + nextValue;
      prevValue = nextValue;
      nextValue = sum;

      if (prevValue === value) {
        numberExistsInSequence = true;
      }
    }
  }

  return {
    fibonacciNumber: `Fibonacci of ${value} is ${prevValue}`,
    message: numberExistsInSequence
      ? "Yes, number belongs in sequence"
      : "No, number does not belong in sequence",
  };
}

console.log(fibonacci(givenNumber));
