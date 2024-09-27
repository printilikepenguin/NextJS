import { useState } from "react";
import Nav from "./Nav";

export default function Header() {
  console.log("Header Rendered");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Header Component: {count}</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <Nav />
    </>
  );
}
