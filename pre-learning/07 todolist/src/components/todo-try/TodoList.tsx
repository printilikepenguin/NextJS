import TodoListItem from "./TodoListItem";
import { useEffect, useState } from "react";

const TodoList = ({
  myList,
  onUpdate,
}: {
  myList: TodoType[];
  onUpdate: (updatedList: TodoType[]) => void;
}) => {
  const [myTodoList, setMyTodoList] = useState<TodoType[]>([]);

  useEffect(() => {
    setMyTodoList(myList);
  }, [myList]);

  return (
    <>
      {[...myTodoList].map((myTTodo: TodoType) => (
        <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
          <TodoListItem myList={myList} myTTodo={myTTodo} onUpdate={onUpdate} />
          {/* 이런 테크닉... 갖고있어야 좋아요 모든 속성이 내려가기때문입니덩 */}
          {/* <TodoListItem key={myTTodo.id} {...myTTodo} onUpdate={onUpdate} /> */}
        </ul>
      ))}
    </>
  );
};
export default TodoList;
