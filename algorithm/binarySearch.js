function binarySearch(arr, target) {
  let first = 0;
  let last = arr.length - 1;

  if (target < arr[first] || target > arr[last]) -1;

  while (first <= last) {
    const half = Math.floor((first + last) / 2);

    if (arr[half] === target) return half;

    if (arr[half] < target) {
      first = half + 1;
    } else if (arr[half] > target) {
      last = half - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 8], 9));
