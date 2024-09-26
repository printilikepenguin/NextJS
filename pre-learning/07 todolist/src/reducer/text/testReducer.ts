export const reducer = (state: number, action: string) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

export const reducerText = (
  state: string,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "SET_VALUE":
      return action.payload;
    default:
      return state;
  }
};
