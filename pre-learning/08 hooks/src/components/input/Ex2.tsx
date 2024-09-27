import useInput from "../../hook/useInput";
import { usePow } from "../../libs/utils";

export default function Ex2() {
  const [name, onChangeName] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordConfirm, onChangePasswordConfirm] = useInput("");
  const pows = usePow(2);
  return (
    <>
      <form action="">
        <input type="text" value={name} onChange={onChangeName} />
        <input type="email" value={email} onChange={onChangeEmail} />
        <input type="password" value={password} onChange={onChangePassword} />
        <input
          type="password"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
        />
        {pows}
      </form>
    </>
  );
}
