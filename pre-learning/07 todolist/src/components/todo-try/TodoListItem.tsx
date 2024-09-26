import Button from "../html/Button";
import CheckBox from "../html/CheckBox";
import { useEffect } from "react";

const TodoListItem = ({
  myTTodo,
  onUpdate,
  myList,
}: {
  myTTodo: TodoType;
  onUpdate: (updatedList: TodoType[]) => void;
  myList: TodoType[];
}) => {
  useEffect(() => {
    console.log(myTTodo);
  }, [myTTodo]);

  // 할 일 삭제
  const handleOnDelete = () => {
    const updatedList = myList.filter((todo) => todo.id !== myTTodo.id);
    onUpdate(updatedList);
  };

  // 체크박스 변경
  const handleToggleComplete = () => {
    const updatedList = myList.map((todo) =>
      todo.id === myTTodo.id
        ? // 객체 병합
          { ...todo, isCompleted: !todo.isCompleted }
        : todo
    );
    onUpdate(updatedList);
  };

  return (
    <>
      <li className="flex items-center justify-between border border-[#4F4F4F] h-[44px] px-[15px] rounded-lg bg-[rgba(53,56,62,0.05)] select-none shrink-0">
        <CheckBox
          type="checkbox"
          onChange={handleToggleComplete}
          checked={myTTodo.isCompleted}
        >
          {myTTodo.isCompleted ? (
            <span className="line-through text-[#35383E]">{myTTodo.text}</span>
          ) : (
            <span className="text-[#35383E]">{myTTodo.text}</span>
          )}
        </CheckBox>

        <Button
          className="border border-[#4f4f4f] rounded w-[23px] h-[23px] flex justify-center items-center"
          onClick={handleOnDelete}
        >
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.50002 9.81827L12.9548 15.2731L14.7731 13.4548L9.31829 8L14.7731 2.54518L12.9548 0.726901L7.50002 6.18173L2.04519 0.726902L0.226918 2.54518L5.68174 8L0.226919 13.4548L2.04519 15.2731L7.50002 9.81827ZM7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
              fill="#4F4F4F"
            />
            <path
              d="M7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
              fill="#4F4F4F"
            />
          </svg>
        </Button>
      </li>
    </>
  );
};

export default TodoListItem;
