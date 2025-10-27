import { View, Text } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCompletedTodos, deleteTodo, toggleTodo } from './redux/todosSlice'
import Todos from './components/Todos'


const CompletedTasks = () => {
  const dispatch = useDispatch();
  const completedTodos = useSelector(selectCompletedTodos);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <View style={{flex: 1 , alignItems: 'center'}}>
      {completedTodos.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, color: '#888' }}>No completed tasks yet!</Text>
        </View>
      ) : (
        <Todos todos={completedTodos} deleteTodo={handleDeleteTodo} toggleTodo={handleToggleTodo} />
        
      )}
    </View>
  )
}

export default CompletedTasks