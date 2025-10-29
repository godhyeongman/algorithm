var twoSum = function (nums, target) {
  const hash = new Map();
  let res;
  for ([idx, num] of nums.entries()) {
    const diff = target - num;

    if (hash.has(diff)) {
      res = [hash.get(diff), idx];
      return res;
    }
    hash.set(num, idx);
  }
};

console.log(twoSum([-3, 4, 3, 90], 0));
