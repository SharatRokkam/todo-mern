import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getTodos = () => API.get("/");

export const createTodo = (todoData) => API.post("/", todoData);

export const updateTodo = (id, todoData) => API.put(`/${id}`, todoData);

export const deleteTodo = (id) => API.delete(`/${id}`);
