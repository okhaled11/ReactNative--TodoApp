import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const TodoDetails = () => {
  const { params } = useRoute();

  if (!params?.todo)
    return (
      <View style={detailStyles.errorContainer}>
        <AntDesign name="frowno" size={64} color="#ccc" />
        <Text style={detailStyles.errorText}>No todo found</Text>
      </View>
    );

  const { todo } = params;

  return (
    <ScrollView style={detailStyles.container}>
      <View style={detailStyles.content}>
        <View
          style={[
            detailStyles.statusBadge,
            todo.completed
              ? detailStyles.completedBadge
              : detailStyles.activeBadge,
          ]}
        >
          <FontAwesome5 
            name={todo.completed ? "check-circle" : "circle"}
            size={18}
            color="green"
            onPress={() => toggleTodo(todo.id)}
          />

          <Text style={detailStyles.statusText}>
            {todo.completed ? "Completed" : "Active"}
          </Text>
        </View>

        <View style={detailStyles.section}>
          <View style={detailStyles.sectionHeader}>
            <MaterialIcons name="title" size={24} color="#0000" />
            <Text style={detailStyles.sectionTitle}>Title</Text>
          </View>
          <Text
            style={[
              detailStyles.title,
              todo.completed && detailStyles.completedText,
            ]}
          >
            {todo.title}
          </Text>
        </View>

        <View style={detailStyles.section}>
          <View style={detailStyles.sectionHeader}>
            <MaterialIcons name="description" size={24} color="#0000" />
            <Text style={detailStyles.sectionTitle}>Description</Text>
          </View>
          <Text style={detailStyles.description}>
            {todo.description || "No description provided"}
          </Text>
        </View>

        <View style={detailStyles.section}>
          <View style={detailStyles.sectionHeader}>
            <AntDesign name="calendar" size={22} color="black" />
            <Text style={detailStyles.sectionTitle}>Created</Text>
          </View>
          <Text style={detailStyles.dateText}>
            {new Date(todo.id).toLocaleString()}
          </Text>
        </View>
        <View style={detailStyles.dividerLine} />
      </View>
    </ScrollView>
  );
};

const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  content: {
    padding: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  errorText: {
    fontSize: 18,
    color: "#999",
    marginTop: 16,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 24,
    gap: 6,
  },
  completedBadge: {
    backgroundColor: "#4caf50",
  },
  activeBadge: {
    backgroundColor: "#ff9800",
  },
  statusText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  section: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    lineHeight: 32,
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  dateText: {
    fontSize: 14,
    color: "#888",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#999",
  },
});

export default TodoDetails;
