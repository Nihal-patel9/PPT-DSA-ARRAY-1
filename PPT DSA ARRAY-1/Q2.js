function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

const nums = [3, 2, 2, 3];
const val = 3;

const k = removeElement(nums, val);
console.log(k); // Output: 2
console.log(nums); // Output: [2, 2, _, _]