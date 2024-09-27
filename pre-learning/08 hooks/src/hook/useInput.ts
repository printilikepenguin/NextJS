// 커스텀 훅
import { useState } from "react";

type MyInputReturn = [string, (e: React.ChangeEvent<HTMLInputElement>) => void];
export default function useInput(initialValue: string): MyInputReturn {
  const [value, setValue] = useState(initialValue);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return [value, onChangeHandler];
}
