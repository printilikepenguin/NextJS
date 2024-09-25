import { useId } from "react";
import { twMerge } from "tailwind-merge";

type CheckBoxProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type" | "id"
>;
export default function CheckBox(props: CheckBoxProps) {
  const { className, children, ...rest } = props;
  const uuid = useId();
  return (
    <>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={uuid}
          className={twMerge(
            "appearance-none w-5 h-5 border border-[#4F4F4F] rounded-[5px] checked:bg-[#4F4F4F] checked:bg-[url('./check.svg')] checked:bg-no-repeat checked:bg-center",
            className
          )}
          {...rest}
        />
        <label htmlFor={uuid}>{children}</label>
      </div>
    </>
  );
}
