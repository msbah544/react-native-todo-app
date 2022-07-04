import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { itemsCompleted } from "../store/todoSlice";

const TodosInfo = ({ todos, setTodos }) => {
  const dispatch = useDispatch();
  const handleComplete = () => {
    dispatch(itemsCompleted());
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.todosInfoContainer}>
        <View style={styles.text}>
          <Text
            style={{
              paddingRight: 20,
              fontSize: 18,
              color: "lightgray",
              fontWeight: "bold",
            }}
          >
            {todos.length} item
            {todos.length > 1 || todos.length == 0 ? "s" : ""} left
          </Text>
        </View>
        <View style={styles.infoTop}>
          <TouchableOpacity style={styles.infobtn}>
            <Text
              style={{
                fontSize: 20,
                color: "hotpink",
                fontWeight: "bold",
              }}
            >
              All
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleComplete} style={styles.infobtn}>
            <Text
              style={{
                fontSize: 20,
                color: "hotpink",
                fontWeight: "bold",
              }}
            >
              Completed
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoBottom}>
          <TouchableOpacity style={styles.infobtn}>
            <Text
              style={{
                fontSize: 20,
                color: "hotpink",
                fontWeight: "bold",
              }}
            >
              Uncompleted
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infobtn}>
            <Text
              style={{
                fontSize: 20,
                color: "hotpink",
                fontWeight: "bold",
              }}
            >
              Clear Completed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  todosInfoContainer: {},
  text: {
    alignItems: "center",
  },
  infoTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    marginHorizontal: 50,
  },
  infoBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  infobtn: {},
});

export default TodosInfo;
