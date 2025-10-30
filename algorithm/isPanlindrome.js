var isPalindrome = function (x) {
  const str = [...String(x)];
  const isOdd = str.length % 2 === 0;

  let count = Math.floor(str.length / 2);

  let [head, tail] = [0, str.length - 1];

  while (count !== 0) {
    count = count - 1;
    if (str[head] !== str[tail]) return false;
    tail--;
    head++;
  }

  return true;
};

console.log(isPalindrome(1000021));
