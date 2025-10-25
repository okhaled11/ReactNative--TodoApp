import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../Router/Router";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../styles";

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        padding: 10,
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 5,
        borderColor: "#aeaeae",
        flexDirection: "row",
        backgroundColor: todo.completed ? "#74d883b5" : "#ec5959a6",
      }}
    >
      <Text
        onPress={() => navigate(PATHS.TODO_DETAILS, { todo: todo })}
        style={[
          { fontSize: 17, fontWeight: "semibold", flex: 1  },
          todo.completed && styles.doneTodo,
        ]}
      >
        {todo.title}
      </Text>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <FontAwesome5
          name="trash"
          size={18}
          color="red"
          onPress={() => deleteTodo(todo.id)}
        />
        <FontAwesome5
          name={todo.completed ? "check-circle" : "circle"}
          size={18}
          color="green"
          onPress={() => toggleTodo(todo.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
