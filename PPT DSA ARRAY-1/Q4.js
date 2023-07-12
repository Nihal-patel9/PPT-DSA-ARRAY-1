function plusOne(digits) {
  const n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  // If we reach this point, it means all digits were 9
  const newDigits = new Array(n + 1).fill(0);
  newDigits[0] = 1;
  return newDigits;
}

const digits = [1, 2, 3];
const result = plusOne(digits);
console.log(result); // Output: [1, 2, 4]