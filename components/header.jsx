import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default header = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>TODOS</Text>
        </View>
        <View>
          <MaterialIcons
            style={styles.icon}
            name="circle"
            size={18}
            color="#333"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    //backgroundColor: "coral",
    backgroundColor: "whitesmoke",
  },
  title: {
    color: "hotpink",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  icon: {
    paddingRight: 10,
    color: "black",
  },
});
