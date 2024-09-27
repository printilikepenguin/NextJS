import { useNavigate } from "react-router-dom";

export default function AboutView() {
  console.log("AboutView Rendered");
  const navigate = useNavigate();
  const onClickHandler = () => {
    // fetch...
    // ...
    alert("글이 등록되었습니다.");
    navigate("/");
  };
  return (
    <>
      <h1>AboutView Component</h1>
      <button onClick={onClickHandler}>글쓰기</button>
    </>
  );
}
