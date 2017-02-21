exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    let result = 0
    for (var i = 0; i < arr.length; i++) {
      result += arr[i]
    }
    return result;
  },

  remove: function(arr, item) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] != item){
        newArr.push(arr[i])
      }
    }
    return newArr
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    var len;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1)
        i--;
        len--;
      };
    };
    return arr;
  },

  append: function(arr, item) {
    arr.push(item)
    return arr;
  },

  truncate: function(arr) {
    arr.pop()
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr;
  },

  curtail: function(arr) {
    arr.shift()
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr;
  },

  count: function(arr, item) {
    let total = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        total++
      }
    }
    return total;
  },

  duplicates: function(arr) {
    
  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
