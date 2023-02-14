var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }

  if (lineNumber == 2 * size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const T = size;
  for (let i = 1; i <= T * 2; i = i = i + 2) {
    let N = parseInt(inputArr[i]);
    let Arr = inputArr[i + 1].split(" ").map((x) => parseInt(x));
    console.log(maxNumbers(Arr, N).join(" ").trim());
  }
}

function maxNumbers(arr, n) {
  const newArr = arr.sort(function (a, b) {
    return a - b;
  });
  // return newArr;
  return [newArr[n - 1], newArr[n - 2], newArr[n - 3]];
  // return the answer as an array of 3 numbers
}
