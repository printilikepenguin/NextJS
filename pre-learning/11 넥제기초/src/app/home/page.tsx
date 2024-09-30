import React from "react";
import Image from "next/image";
import travel from "public/images/travel.png";
import seoul from "public/images/seoul.jpg";
import london from "public/images/london.jpg";
import paris from "public/images/paris.jpg";
import newyork from "public/images/newyork.jpg";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-4  max-w-[500px]">
          <Image src={travel} alt={"로고"} width={80} />
          <ul className="flex items-center antialiased justify-around w-full">
            <li>
              <a href="#">Seoul</a>
            </li>
            <li>
              <a href="#">London</a>
            </li>
            <li>
              <a href="#">Paris</a>
            </li>
            <li>
              <a href="#">NewYork</a>
            </li>
          </ul>
          <div>
            <Image src={seoul} alt={"서울"} />
            {/* <Image src={london} alt={"런던"} />
            <Image src={paris} alt={"파리"} />
            <Image src={newyork} alt={"뉴욕"} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
