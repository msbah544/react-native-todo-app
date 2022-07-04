import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/TodoItem";
import Form from "./components/Form";
import TodosInfo from "./components/TodosInfo";
import { useSelector } from "react-redux";

const Home = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header />
        <Form todos={todos} />
        <View style={styles.list}>
          <ScrollView>
            {todos.map((item, index) => (
              <TodoItem
                key={index}
                id={item.id}
                item={item}
                completed={item.completed}
                todos={todos}
              />
            ))}
          </ScrollView>
        </View>
        <View>
          <TodosInfo todos={todos} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});

export default Home;
