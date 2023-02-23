export const INITIAL_STATE = {
  ans: 0,
};

export const reducer = (state, action) => {
  //   console.log(action);
  let result = 0;
  switch (action.type) {
    case "+":
      result = action.num1 + action.num2;
      console.log({ ...state, ans: result });
      return { ...state, ans: result };
    case "-":
      result = action.num1 - action.num2;
      return { ...state, ans: result };
    default:
      return state;
  }
};

// for + action, action parameter = { type: "+", num1: num1, num2: num2 };
// for - action, action parameter = { type: "-", num1: num1, num2: num2 };
