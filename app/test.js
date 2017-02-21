function count(arr, item) {
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      total++
    }
  }
  return total;
}
console.log(count([1,2,2,2,3,2], 2));
