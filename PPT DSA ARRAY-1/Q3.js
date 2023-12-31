function searchInsert(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

const nums = [1, 3, 5, 6];
const target = 5;
const index = searchInsert(nums, target);
console.log(index); // Output: 2