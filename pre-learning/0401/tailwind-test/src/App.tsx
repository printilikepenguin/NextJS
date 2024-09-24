import Button from "./components/Button";

function App() {
  return (
    <div className="item-middle">
      <Button className="bg-rose-500" children={"로그인"} />
      <Button className="bg-blue-500" children={"로그아웃"} />
      <Button className="bg-black-500" children={<strong>삭제</strong>} />{" "}
    </div>
  );
}

export default App;
