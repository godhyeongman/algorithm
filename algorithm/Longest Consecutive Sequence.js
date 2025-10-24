const solution = (nums) => {
  const hashTable = new Set(nums);
  const arr = Array.from(hashTable);
  let temp;

  for (num of arr) {
    if (hashTable.has(num - 1)) continue;

    let count = 1;
    while (hashTable.has(num + count)) count++;
    temp = temp > count ? temp : count;
  }

  return temp;
};

console.log(solution([1, 2, 3, 4, 2, 2, 4, 6, 7, 8, 9, 10]));

