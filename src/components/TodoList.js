import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

let colors = ["#ffa07a", "#7aebff", "#c57aff", "#ffe27a"];

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <View style={styles.container}>
    <FlatList
      data={todos}
      renderItem={({ item, index }) => (
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: item.completed
              ? "#eaeaea"
              : colors[index % colors.length],
            borderRadius: 15,
            padding: 20,
            margin: 5,
            backgroundColor: item.completed
              ? "#eaeaea"
              : colors[index % colors.length],
            elevation: item.completed ? 0 : 5,
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 20,
            shadowOpacity: 0.8
          }}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => toggleTodo(item.id)}
          >
            <Text
              style={{
                fontFamily: "monaco",
                fontSize: 22,
                color: item.completed ? "grey" : "black",
                textDecorationLine: item.completed ? "line-through" : "none"
              }}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTodo(item.id)}>
            <Icon name="md-trash" size={30} />
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item, index) => item.id.toString()}
    />
  </View>
);
export default TodoList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10
  }
});
