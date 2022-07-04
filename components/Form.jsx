import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

export default Form = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addTodo(text));
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <TouchableOpacity style={styles.addTodoBtn} onPress={handleSubmit}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          ADD TODO
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    color: "grey",
    fontSize: 20,
    fontWeight: "bold",
  },
  addTodoBtn: {
    backgroundColor: "hotpink",
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
