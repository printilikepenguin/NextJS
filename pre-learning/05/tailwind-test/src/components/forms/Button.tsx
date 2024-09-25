import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;
export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <>
      <button
        className={`inter text-sm text-white rounded-lg disabled:cursor-not-allowed ${className}`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
