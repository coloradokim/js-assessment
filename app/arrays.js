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
      }
    }
    return arr;
  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
