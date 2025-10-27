import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import todosReducer, { setTodos } from './todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export const loadTodosFromStorage = async () => {
  try {
    const todosJson = await AsyncStorage.getItem('todos');
    if (todosJson !== null) {
      const todos = JSON.parse(todosJson);
      store.dispatch(setTodos(todos));
    }
  } catch (error) {
    console.error('Error loading todos from storage:', error);
  }
};

let previousTodos = [];
store.subscribe(async () => {
  const currentTodos = store.getState().todos.todos;
  

  if (JSON.stringify(currentTodos) !== JSON.stringify(previousTodos)) {
    previousTodos = currentTodos;
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(currentTodos));
    } catch (error) {
      console.error('Error saving todos to storage:', error);
    }
  }
});
