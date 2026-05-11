import { useEffect, useState } from "react";

const TodoForm = ({ onSubmit, editTodo, clearEdit }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editTodo) {
      setText(editTodo.text);
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    // it protect the form from autosubmission
    e.preventDefault();

    if (!text.trim()) return;
    onSubmit(text);

    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter your todo"
        value={text}
        className="input"
        onChange={(e) => setText(e.target.value)}
      />

      {editTodo ? (
        <button type="submit" className="button">
          Update
        </button>
      ) : (
        <button type="submit" className="">
          Add
        </button>
      )}

      {editTodo && (
        <button
          type="button
            "
          className="button"
          onClick={clearEdit}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default TodoForm;
