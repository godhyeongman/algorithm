const hashSum = (arr, target) => {
  const setArr = new Set(arr);

  for (let num of setArr) {
    const diff = target - num;
    const hasDiff = setArr.has(diff);

    console.log(setArr, num, diff);

    if (hasDiff) return true;
  }
  return false;
};

console.log(hashSum([3, 2, 3, 4, 5], 3));
