import TodoListItem from "./TodoListItem";

const TodoList = ({
  todos,
  dispatch,
}: // removeTodo,
// toggleTodo,
{
  todos: TodoType[];
  dispatch: React.DispatchWithoutAction;
  // removeTodo: (id: string) => void;
  // toggleTodo: (id: string) => void;
}) => {
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
