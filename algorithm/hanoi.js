// function myhanoi(arr) {
//   console.log(arr);
//   const finalLength = arr[0].length;
//
//   const solution = (tower) => {
//     console.log(tower);
//     if (tower[2].length === finalLength) return tower;
//
//     if (tower[1].length === 0 && tower[2].length === 0) {
//       const [one, two, target, ...rest] = tower[0];
//
//       return solution([rest, [one, two], [target]]);
//     }
//
//     let root = tower.findIndex((arr) => arr[0] === 1);
//     let gather = tower.findIndex((arr) => arr[0] !== 1 && arr[0] % 2 === 1);
//     let take = [0, 1, 2].find((index) => index !== root && index !== gather);
//     const one = tower[root].shift();
//     const two = tower[root].shift();
//     let target = tower[root].shift();
//     console.log(target);
//
//     if (!target) {
//       target = tower[take].shift();
//       tower[gather].unshift(one, two);
//       tower[root].unshift(target);
//       return solution(tower);
//     }
//
//     tower[gather].unshift(one, two);
//     tower[take].unshift(target);
//
//     return solution(tower);
//   };
//
//   return solution(arr);
// }
//
// // 가장 큰 숫자 확인
//
// // a과 b에 뿌리고
// // a에 b를 모으고
// // root 에서 b로 꺼낸다
//
// // root? 가장 작은 수를 가진 기둥
// // 모일곳은 어디인가? -> 홀수가 위인곳
// // 꺼낼곳은? 홀수가 위가 아닌곳
// // 그다음 꺼낼 숫자는? root 기본 -> 없다면? ->
//
// // 결과 실패... why? 패턴분석이 부정확 하였음 -> 다음에는 패턴 분석을 명확하게 하면 더 재귀적으로 해결 가능할듯
//
// function solutionHanoi(num, obj, from, by, to) {
//   {
//     if (num == 1) {
//       const temp = obj[from].shift();
//       obj[to].unshift(temp);
//       return obj;
//     }
//
//     solutionHanoi(num - 1, obj, from, to, by);
//     const temp = obj[from].shift();
//     obj[to].unshift(temp);
//     return solutionHanoi(num - 1, obj, by, from, to);
//   }
// }
//
// const test = solutionHanoi(4, { A: [1, 2, 3, 4], B: [], C: [] }, 'A', 'B', 'C');
// console.log(test);

const hanoi = (arr) => {
  const stack = [];
  // 가운데에서 오른쪽 왼쪽으로
  // 34 2 1
  // 34 12 /
  // 4 12 3
  // 4 2 13
  // 24 / 13
  // 124 / 3
  // 124 3 /
  // 24 3 1
  // 4 23 1
  // 4 123 /
  // / 123 4
  // / 23 14
  // 2 3 14
  // 12 3 4
  // 12 / 34
  // 2 1 34
  // / 1 234
  // / / 1234
  if (arr[0].length === 0 && arr[1].length === 0) return stack;
};
