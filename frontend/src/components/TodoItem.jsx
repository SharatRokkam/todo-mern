const TodoItem = ({ todo, onDelete, onEdit }) => {
  return (
    <div className="todo-item">
      <h3>{todo.text}</h3>

      <div className="todo-actions">
        <button onClick={() => onEdit(todo)}> Edit</button>
        <button onClick={() => onDelete(todo._id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
