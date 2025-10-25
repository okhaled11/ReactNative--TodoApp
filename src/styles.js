import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  input: {
    borderWidth: 3,
    borderColor: "black",
    width: "90%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    width: "50%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    width: "30%",
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  todosContainer: {
    marginTop: 10,
    width: "90%",
    height: "20%",
    marginTop: 20,
  },
  doneTodo: {
    textDecorationLine: "line-through",
  },
});
