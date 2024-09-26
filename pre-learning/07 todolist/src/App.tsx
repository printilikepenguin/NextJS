// import Todo from "./components/todo-try/Todo";
// import Todo from "./components/real-todo/Todo";
// import { useEffect, useState } from "react";
import { useReducer, useState } from "react";
import { reducerText, reducer } from "./reducer/text/testReducer";

export default function App() {
  const [cnt, setCnt] = useReducer(reducer, 0);
  const [txt, setTxt] = useReducer(reducerText, "");

  return (
    <>
      <div>hi</div>
      {cnt}
      <div className="flex gap-4 m-10 bg-gray-400">
        <button
          onClick={() => {
            setCnt("INCREMENT");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCnt("DECREMENT");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCnt("RESET");
          }}
        >
          0
        </button>
      </div>
    </>
  );
}
