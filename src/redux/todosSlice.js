import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    clearAllTodos: (state) => {
      state.todos = [];
    },
  },
});

export const { setTodos, addTodo, deleteTodo, toggleTodo, clearAllTodos } = todosSlice.actions;


export const selectAllTodos = (state) => state.todos.todos;
export const selectActiveTodos = (state) => state.todos.todos.filter((todo) => !todo.completed);
export const selectCompletedTodos = (state) => state.todos.todos.filter((todo) => todo.completed);

export default todosSlice.reducer;
