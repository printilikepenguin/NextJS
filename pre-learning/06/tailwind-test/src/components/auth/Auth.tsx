import React from "react";

import { useState } from "react";
import Button from "../forms/Button";
import CheckBox from "../forms/CheckBox";
import Input from "../forms/Input";

export default function Auth() {
  const [authType, setAuthType] = useState<"Sign" | "Login">("Sign");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);
  return (
    <>
      <div className="inter item-middle bg-black">
        <div className="w-[375px] bg-white py-10 px-[25px] rounded-lg">
          <h1 className="text-xl font-bold text-[#4F4F4F] mb-[10px]">
            Sign Into App
          </h1>
          <p className="text-[#4F4F4F] text-sm mb-5">
            Please enter your details to continue.
          </p>
          <form action="" className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Someone@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
              <CheckBox>
                I agree with <em className="font-bold not-italic">terms</em> and{" "}
                <em className="font-bold not-italic">policies.</em>
              </CheckBox>
            </div>
            <div className="flex flex-col gap-4">
              <Button className="bg-[#4F4F4F]">Sign In</Button>
              <Button className="border border-[#4F4F4F] text-[#4F4F4F]">
                Go To Log In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
