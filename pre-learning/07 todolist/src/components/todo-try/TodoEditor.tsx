import { v4 as uuidv4 } from "uuid";

import Button from "../html/Button";
import Input from "../html/Input";
import { useState } from "react";

const TodoEditor = ({
  myList,
  onUpdate,
}: {
  myList: TodoType[];
  onUpdate: (updatedList: TodoType[]) => void;
}) => {
  const [myTodo, setMyTodo] = useState<string>("");
  const [validTTodo, setValidTTodo] = useState<TodoType | null>(null); // 초기값 null

  const tempUpdate = () => {
    if (myTodo.trim() !== "") {
      setValidTTodo({
        // 이렇게 하면 오류남
        // id: myList.length, // id 값을 동?적으로 설정
        id: uuidv4(), // id 값을 동?적으로 설정
        text: myTodo,
        isCompleted: false,
      });
    }
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault(); // 기본 form 제출 동작 방지
    tempUpdate(); // tempUpdate 호출

    if (validTTodo) {
      setMyTodo(""); // 입력 필드 초기화
      console.log(myTodo);
      console.log(validTTodo);
      onUpdate([...myList, validTTodo]); // 유효한 Todo가 있을 경우 업데이트
    }
  };

  return (
    <>
      <form action="" className="grid gap-4" onSubmit={handleAddTodo}>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter Todo List"
            value={myTodo}
            onChange={(e) => setMyTodo(e.target.value)}
          />
          <Button
            type="submit"
            className="bg-[#4f4f4f] text-white w-[77px] shrink-0 rounded-lg"
          >
            Add
          </Button>
        </div>
      </form>
    </>
  );
};

export default TodoEditor;
