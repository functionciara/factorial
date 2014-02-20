var outside = function(n){
  var originalN = n;
  var factorial = function(n) {
    console.log(originalN + "! = " + endNumber);
    if (n === 0) {
      return 1;
    }

    var endNumber = (n * factorial(n - 1));

    return endNumber;
  }
  return endNumber;
}
