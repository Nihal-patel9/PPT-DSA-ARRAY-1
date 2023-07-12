function findErrorNums(nums) {
  const n = nums.length;
  const count = new Array(n + 1).fill(0);

  let duplicate, missing;

  for (let num of nums) {
    count[num]++;
  }

  for (let i = 1; i <= n; i++) {
    if (count[i] === 0) {
      missing = i;
    } else if (count[i] === 2) {
      duplicate = i;
    }
  }

  return [duplicate, missing];
}

const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result); // Output: [2, 3]