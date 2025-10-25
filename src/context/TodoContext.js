import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const getActiveTodos = () => todos.filter((todo) => !todo.completed);
  const getCompletedTodos = () => todos.filter((todo) => todo.completed);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        deleteTodo,
        toggleTodo,
        getActiveTodos,
        getCompletedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
