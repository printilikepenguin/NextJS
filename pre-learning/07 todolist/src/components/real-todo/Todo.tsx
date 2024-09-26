import { v4 as uuidv4 } from "uuid";
import { useCallback, useReducer, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { todoReducer } from "../../reducer/todoReducer";

const Todo = () => {
  // 리듀서 하나만 있으면 아래 함수들 다 지울 수 있음

  const [reducerTodos, dispatch] = useReducer(todoReducer, []);

  // const [todos, setTodos] = useState<TodoType[]>([]);

  // const addTodo = (text: string) => {
  //   setTodos((todos) => [
  //     ...todos,
  //     {
  //       id: uuidv4(),
  //       text,
  //       isCompleted: false,
  //     },
  //   ]);
  // };

  // const removeTodo = useCallback((id: string) => {
  //   setTodos((todos) => todos.filter((todo) => todo.id !== id));
  // }, []);

  // const toggleTodo = useCallback((id: string) => {
  //   setTodos((todos) =>
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.isCompleted } : todo
  //     )
  //   );
  // }, []);

  return (
    <>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter ">
          <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          {/* 등록 */}
          {/* <TodoEditor addTodo={addTodo} /> */}
          <TodoEditor dispatch={dispatch} />
          {/* 목록 */}
          {/* <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          /> */}
          <TodoList todos={todos} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
};
export default Todo;
