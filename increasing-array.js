function increaseArray(arr, n) {
  let prev = 0;

  for (let i = 0; i < n; i++) {
    let flag = false;
    let val = -1;
    for (let j = prev + 1; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        flag = true;
        val = j;
        break;
      }
    }

    if (flag) arr[i] = val;

    prev = arr[i];
  }

  let flag = true;
  for (let i = 1; i < n; i++) {
    if (arr[i] <= arr[i - 1]) {
      flag = false;
      break;
    }
  }

  if (flag) return "YES";
  else return "NO";
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  // if (lineNumber == 0) {
  //   size = parseInt(inputArr[0]);
  // }
  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const n = parseInt(inputArr[0]);
  const arr = inputArr[1].split(" ").map((x) => parseInt(x));
  console.log(increaseArray(arr, n));
}
