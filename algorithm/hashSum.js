const hashSum = (arr, target) => {
  const tmp = new Set();

  for (let num of arr) {
    const diff = target - num;
    const hasDiff = tmp.has(diff);

    console.log(tmp, num, diff);

    if (hasDiff) return true;
    tmp.add(num);
  }
  return false;
};

console.log(hashSum([1, 2, 3, 4, 5], 3));
