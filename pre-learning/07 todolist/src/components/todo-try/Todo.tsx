import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";

const Todo = () => {
  const [myList, setMyList] = useState<TodoType[]>([]);
  const handleTodoListUpdate = (updatedList: TodoType[]) => {
    setMyList(updatedList);
  };

  useEffect(() => {
    console.log(myList);
  }, [myList]);

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter ">
          <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          {/* 등록 */}
          <TodoEditor myList={myList} onUpdate={handleTodoListUpdate} />
          {/* 목록 */}
          <div className="h-[300px] overflow-scroll">
            <TodoList myList={myList} onUpdate={handleTodoListUpdate} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
