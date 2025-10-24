const biggerNumSearch = (nums) => {
  const stack = [];
  const numsWithDay = nums.map((val, idx) => ({ day: idx, value: val }));
  const answer = Array.from({ length: nums.length }, () => undefined);

  let idx = 0;
  for ({ day, value } of numsWithDay) {
    if (idx === 0) {
      stack.push({ day, value });
      idx++;
      continue;
    }

    let last = stack[stack.length - 1];

    while (last.value < value) {
      const poped = stack.pop();
      last = stack[stack.length - 1];

      if (!poped) break;
      answer[poped.day] = idx - poped.day;
    }

    stack.push({ day, value });
    idx++;
  }

  answer[answer.length - 1] = 0;
  answer.forEach((val, idx) => {
    if (val === undefined) answer[idx] = 0;
  });

  return answer;
};

const res = biggerNumSearch([6, 3, 3, 4, 5, 6, 5]);

console.log(res);
