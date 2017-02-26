function squareIt(arr) {
  return arr.map(function(item) {
    return item * item
  });
};

console.log(squareIt([1,2,3,4]));
