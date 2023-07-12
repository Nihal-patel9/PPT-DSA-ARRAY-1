function moveZeroes(nums) {
  let insertIndex = 0;

  for (let num of nums) {
    if (num !== 0) {
      nums[insertIndex] = num;
      insertIndex++;
    }
  }

  while (insertIndex < nums.length) {
    nums[insertIndex] = 0;
    insertIndex++;
  }
}

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]