// import { useState } from "react";
import Count from "./components/Count";

export default function App() {
  const printProps = { count: Number, operator: String };
  // const [count, setCount] = useState<number>(0);
  // const onClick = (event: any) => {
  //   console.log(event);
  // };
  // const login = () => {
  //   return "login process";
  // };
  // const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };
  // const onkeydownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   console.log(e);
  //   if (e.keyCode === 13) {
  //     console.log("엔터키입력");
  //     login();
  //   }
  // };

  return (
    <>
      <h1 id="title">App component</h1>
      <Count count={10} operator="+" printProps={printProps} />
      {/* <form action="" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="email"
          autoComplete="off"
          onKeyDown={onkeydownHandler}
        />
        <input type="password" name="password" />
        <button type="submit" onClick={login}>
          로그인
        </button>
      </form> */}
    </>
  );
}
