function allEvens(arr) {
    return arr.every(function (num) {
      return num % 2 === 0;
    });
  }