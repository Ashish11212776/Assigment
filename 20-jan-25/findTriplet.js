// 3. Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
// and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

const findTriplet = (arr) => {
  let n = arr.length;
  let result = [];
  if (n < 3) return result;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum == 0) {
        result.push([arr[i], arr[j], arr[k]]);
        while (j < k && arr[j] == arr[j + 1]) j++;
        while (j < k && arr[k] == arr[k - 1]) k--;
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  console.log(result);
  return result;
};  

let arr = [-1, 0, 1, 2, -1, -4];    
findTriplet(arr);