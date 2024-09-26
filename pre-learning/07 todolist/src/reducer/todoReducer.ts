import { v4 as uuidv4 } from "uuid";

export const todoReducer = (todos: TodoType[], action: TodoAction) => {
  switch (action.type) {
    case "add":
      return [
        ...todos,
        {
          id: uuidv4(),
          text: action.payload,
          isCompleted: false,
        },
      ];

    case "toggle":
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.isCompleted }
          : todo
      );

    case "remove":
      return todos.filter((todo) => todo.id !== action.payload);
    default:
      break;
  }
};
