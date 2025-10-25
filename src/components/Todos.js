import { View, Text, FlatList } from "react-native";
import TodoItem from "./TodoItem";
import { styles } from "../styles";

const Todos = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <View style={[styles.todosContainer, { flex: 1 }]}>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
        Todos
      </Text>

      <FlatList
        style={{ flex: 1 }}
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Todos;

