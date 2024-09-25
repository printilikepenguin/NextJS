import { twMerge } from "tailwind-merge";

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "color";
};
ç
  const { className, ...rest } = props;
  return (
    <>
      <input
        className={twMerge(
          "w-full h-[44px] border border-[#4F4F4F] rounded-lg py-[13.5px] px-[16px] inter text-sm font-medium placeholder:text-[#acacac]",
          className
        )}
        {...rest}
      />
    </>
  );
}
