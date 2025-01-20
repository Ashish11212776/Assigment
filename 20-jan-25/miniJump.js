// 4. You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are
// at nums[i], you can jump to any nums[i + j] where:
// • 0 <= j <= nums[i] and
// • i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can
// reach nums[n - 1].

const findeMinJumps = (arr) => {
  let n = arr.length;
  let jumps = 0;
  let maxReach = 0;
  let currposition = 0;
  if (nums[0] == 0 || n == 0) return step;
  for (let i = 0; i < n - 1; i++) {
    maxReach = Math.max(maxReach, i + arr[i]);
    if (i == currposition) {
      jumps++;
      currposition = maxReach;
    }
  }
  console.log(jumps);
  return jumps;
};

let arr = [2, 1, 4, 1, 4];
findeMinJumps(arr);
