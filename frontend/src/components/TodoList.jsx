import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onEdit }) => {
  if (todos.length === 0) {
    return <p className="empty">No Todos Found</p>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
