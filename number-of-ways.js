// ignore number of testcases
// n is the number as provided in input

function helper(i, nums, sum, dp) {
  let n = nums.length;

  if (i === n) {
    if (sum === 0) return 1;
    else return 0;
  }

  if (sum < 0) return 0;

  if (dp[i][sum] !== -1) return dp[i][sum];

  let exclude = helper(i + 1, nums, sum, dp);
  let include = 0;

  if (nums[i] <= sum) include = helper(i + 1, nums, sum - nums[i], dp);

  dp[i][sum] = exclude + include;
  return dp[i][sum];
}

function numberOfWays(n) {
  const arr = [];
  const dp = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  for (let i = 0; i <= n; i++) {
    const newArr = [];
    for (let j = 0; j <= n; j++) {
      newArr.push(-1);
    }
    dp.push(newArr);
  }

  return helper(0, arr, n, dp);
  // write code here
  // do not console.log the answer
  // return answer as a number
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
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }
  //Exit Condition
  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const testcases = parseInt(inputArr[0]);
  for (let i = 1; i <= testcases; i = i + 1)
    console.log(numberOfWays(parseInt(inputArr[i])));
}
