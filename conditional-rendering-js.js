const tempFunc = (isDeleted) => {
  // ternary operator
  //   const response = isDeleted
  //     ? "This has already been deleted"
  //     : "This had not yet been deleted";

  //   if-else
  //   let response;
  //   if (isDeleted) response = "This has already been deleted";
  //   else response = "This had not yet been deleted";

  //   switch case
  let response;
  switch (isDeleted) {
    case true:
      response = "This has already been deleted";
      break;
    case false:
      response = "This had not yet been deleted";
      break;
  }

  return response;
};

const result = tempFunc(true);

console.log(result);
