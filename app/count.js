exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    while (start <= end) {
      console.log(start++);
  }
};
