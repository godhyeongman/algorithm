function fibo(number) {
  if (number === 1) return 0;
  if (number === 2) return 1;

  return fibo(number - 1) + fibo(number - 2);
}

console.log(fibo(5));

// 수학적 지식이 없어서 내 생각대로 구현함, parameter가 2개나 더 있는게 아쉬움
function myFibo(number, current = 0, next = 1) {
  number = number - 1;

  if (number === 0) return current;

  const summary = current + next;
  current = next;
  next = summary;
  return myFibo(number, current, next);
}

console.log(myFibo(5));
