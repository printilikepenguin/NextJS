import React from "react";
type InputProps = React.ComponentPropsWithoutRef<"input">;

export default function Input(props: InputProps) {
  const { className, ...rest } = props;
  return (
    <>
      <input
        className={`h-[44px] border border-[#4F4F4F] rounded-lg py-[13.5px] px-[16px] inter text-sm font-medium placeholder:text-[#acacac]
          ${className}`}
        {...rest}
      />
    </>
  );
}
