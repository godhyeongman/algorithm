const biggerNumSearch = (nums) => {
  const stack = [];
  const numsWithDay = nums.map((val, idx) => ({ day: idx, value: val }));
  const answer = Array.from({ length: nums.length }, () => 0);

  for ({ day, value } of numsWithDay) {
    while (stack.length > 0 && stack[stack.length - 1].value < value) {
      const poped = stack.pop();
      answer[poped.day] = day - poped.day;
    }
    stack.push({ day, value });
  }

  return answer;
};

const res = biggerNumSearch([6, 3, 3, 4, 5, 6, 5]);

console.log(res);
