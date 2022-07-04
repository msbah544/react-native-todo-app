import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../store/todoSlice";

const TodoItem = ({ item, id, completed }) => {
  const dispatch = useDispatch();
  const handleComplete = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={handleComplete} style={styles.checkbtn}>
        <MaterialIcons name="check" size={25} color="white" />
      </TouchableOpacity>
      <Text style={item.completed ? styles.completedItemText : styles.itemText}>
        {item.text}
      </Text>
      <TouchableOpacity onPress={handleDelete} style={styles.deletebtn}>
        <MaterialIcons name="delete" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
  },
  completedItemText: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    textDecorationLine: "line-through",
    textDecorationColor: "#dcdcdc",
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
  },
  checkbtn: {
    backgroundColor: "green",
    borderRadius: 20,
  },
  deletebtn: {
    backgroundColor: "red",
    borderRadius: 20,
  },
});

export default TodoItem;
