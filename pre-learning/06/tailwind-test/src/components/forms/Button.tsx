import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;
export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          "inter w-full h-[44px] text-sm text-white rounded-lg disabled:cursor-not-allowed",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
