import { View, Text } from 'react-native'
import React from 'react'
import { useTodos } from './context/TodoContext'
import Todos from './components/Todos'
import { styles } from './styles'

const CompletedTasks = () => {
  const { getCompletedTodos, deleteTodo, toggleTodo } = useTodos();
  const completedTodos = getCompletedTodos();

  return (
    <View style={{flex: 1 , alignItems: 'center'}}>
      {completedTodos.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, color: '#888' }}>No completed tasks yet!</Text>
        </View>
      ) : (
        <Todos todos={completedTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        
      )}
    </View>
  )
}

export default CompletedTasks