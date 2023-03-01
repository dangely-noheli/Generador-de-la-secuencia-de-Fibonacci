function fibonacci(start, end) {
  var fib_seq = [0, 1];
  while (fib_seq.length <= end) {
    var next_num = fib_seq[fib_seq.length - 1] + fib_seq[fib_seq.length - 2];
    fib_seq.push(next_num);
  }
  return fib_seq.slice(start, end + 1);
}

function generateFibonacci() {
  var start = parseInt(document.getElementById("start-index").value);
  var end = parseInt(document.getElementById("end-index").value);
  var result = fibonacci(start, end);
  var resultStr = result.join(", ");
  document.getElementById("fibonacci-sequence").innerHTML = resultStr;
}
