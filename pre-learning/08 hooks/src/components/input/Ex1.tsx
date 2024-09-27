import { useState } from "react";

export default function Ex1() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const onChangeFormState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
      <form action="">
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={onChangeFormState}
        />
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={onChangeFormState}
        />
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={onChangeFormState}
        />
        <input
          type="password"
          name="passwordConfirm"
          value={formState.passwordConfirm}
          onChange={onChangeFormState}
        />
      </form>
    </>
  );
}
