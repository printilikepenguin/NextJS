import React from "react";
import { useCountStore } from "../../zustand/CountStore";

export default function Display() {
  const { count } = useCountStore();
  return <div>Display {count}</div>;
}
