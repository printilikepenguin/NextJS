import React from "react";
import { useCountStore } from "../../zustand/CountStore";
import { twMerge } from "tailwind-merge";

export default function UpdateCount() {
  const { increment, remove } = useCountStore();
  return (
    <div>
      UpdateCount
      <button
        className={twMerge("m-5 p-2 border border-gray-500 rounded=md")}
        onClick={increment}
      >
        +++
      </button>
      <button onClick={remove}>reset!!!!</button>
    </div>
  );
}
