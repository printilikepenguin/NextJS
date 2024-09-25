import Input from "../forms/Input";
import CheckBox from "../forms/CheckBox";
import Button from "../forms/Button";
import { useState } from "react";

export default function Signupbox() {
  // const [isFull, setIsFull] = useState<boolean>(false);

  return (
    <>
      <div className="w-200 h-500 p-6">
        <div className="flex flex-col gap-6">
          <div className="color-gray-500 font-bold">Login Into App</div>
          <div>Please enter your detaios to continue.</div>
          <Input
            type="name"
            placeholder="Enter your name"
            className="w-full h-10"
          />
          <Input
            type="email"
            placeholder="someone@example.com"
            className="w-full h-10"
          />
          <Input
            type="password"
            placeholder="Enter password"
            className="w-full h-10"
          />
          <CheckBox>
            <p className="text-sm">
              I agree with <em className="font-bold not-italic">terms</em> and{" "}
              <em className="font-bold not-italic">policies</em>.
            </p>
          </CheckBox>
          <Button
            type="button"
            name="add-btn"
            className="bg-[#4F4F4F] w-full h-10"
            // {isFull ? disabled}
          >
            Add
          </Button>
          <Button
            type="button"
            name="add-btn"
            className="border border-line-[#4F4F4F] w-full h-10 text-gray-500"
          >
            Go To Login
          </Button>
        </div>
      </div>
    </>
  );
}
