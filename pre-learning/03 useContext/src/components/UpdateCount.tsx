import React, { useContext } from "react";

export default function UpdateCount() {
  const { setCount } = useContext();

  return (
    <div>
      UpdateCount
      <button onClick={() => setCount((count) => count + 1)}>+++++</button>
    </div>
  );
}
