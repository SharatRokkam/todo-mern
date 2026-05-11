import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import { getTodos, createTodo, updateTodo, deleteTodo } from "../api/todoApi";
import { useEffect, useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await getTodos();

      setTodos(response.data);
      setError("");
    } catch (error) {
      setError("Failed to fetch todos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = async (text) => {
    try {
      await createTodo({ text });
      fetchTodos();
    } catch (error) {
      setError("Failed to Add todo");
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      fetchTodos();
    } catch (error) {
      setError("Failed to delete Todo");
    }
  };

  const handleEditTodo = (todo) => {
    setEditTodo(todo);
  };

  const handleUpdateTodo = (todo) => {
    async (text) => {
      try {
        await updateTodo(editTodo._id, { text });
        setEditTodo(null);
        fetchTodos();
      } catch (error) {
        setError("Failed to update todo");
      }
    };
  };

  return (
    <div className="container">
      <h1 className="title">MERN todo APP</h1>
      <TodoForm
        onSubmit={editTodo ? handleUpdateTodo : handleAddTodo}
        editTodo={editTodo}
        clearEdit={() => setEditTodo(null)}
      />

      {loading && <p className="loading">Loading....</p>}

      {error && <p className="error"> {error}</p>}

      {!loading && (
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
        />
      )}
    </div>
  );
};

export default Home;
