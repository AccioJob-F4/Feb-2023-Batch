export const customMiddleware = (store) => (next) => (action) => {
  console.log("Before action:", store.getState());
  console.log("Action:", action);
  action.state = store.getState();
  next(action);
  console.log("After action:", store.getState());
};
