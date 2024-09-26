import { twMerge } from "tailwind-merge";
import { useState } from "react";
import styled from "styled-components";
import "./css/index.css";
import Page from "./Page";
import OutPage from "./OutPage";
import CountProvider from "../context/CountProvider";

const HIHELLO = styled.article`
  text-decoration: line-through;
`;

export default function WithContextAPP() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      {" "}
      <h1 className={twMerge("text-rose-300 text-3xl font-bold")}>
        Hello world!
      </h1>
      <button
        className={twMerge(
          "p-2 border border-gray-500 rounded=md bg-black text-white",
          isActive && "bg-blue-500 border-blue-500"
        )}
        onClick={() => setIsActive(!isActive)}
      >
        click
      </button>
      <h3 className="doldams">그냥 날 죽여</h3>
      <HIHELLO>집ㅈㄴㅈㄴㅈㄴ가고싶다집가고싶다 ㅅㅂ 집</HIHELLO>
      {/*  */}
      <CountProvider>
        <Page />
      </CountProvider>
      <OutPage />
    </>
  );
}
