const longestConsecutiveHash = (arr) => {
  let biggest = 0;
  let curr = 0;

  const sort = arr.sort((a, b) => a - b);

  const setArr = new Set(arr);

  for (const num of setArr) {
    const next = num + 1;
    const hasNext = setArr.has(next);

    if (!hasNext) {
      curr = 0;
      continue;
    }

    ++curr;

    if (biggest < curr) biggest = curr;
    console.log(num, curr, biggest);
  }

  return biggest + 1;
};

const res = longestConsecutiveHash([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
console.log(res);
