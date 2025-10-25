import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles";
import { useTodos } from "../context/TodoContext";

const TodoForm = () => {
  const { addTodo } = useTodos();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    if(!title) return;

    const obj = {
        id: Date.now(),
        title,
        description,
        completed: false
    }

    addTodo(obj);
    setDescription('');
    setTitle('');
  }

  return (
    <>
      <TextInput style={styles.input} placeholder="Add a new todo..." value={title} onChangeText={(txt => setTitle(txt))} />
      <TextInput style={styles.input} placeholder="Add a description..." value={description} onChangeText={(txt => setDescription(txt))} />
      <TouchableOpacity style={styles.submitBtn} onPress={submit}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.dividerLine} />
    </>
  );
};

export default TodoForm;
