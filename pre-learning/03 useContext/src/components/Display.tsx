import React, { useContext } from "react";
import { CounterContext } from "../App";

export default function Display() {
  // 맨끝에 ! 붙여주면 null 절대 안들어온다고 못박는거임
  const { count } = useContext(CounterContext)!;
  return <div>count: {count}</div>;
}
