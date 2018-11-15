import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

let colors = ["#ffa07a", "#7aebff", "#c57aff", "#ffe27a"];

const TodoList = ({ todos, toggleTodo }) => (
  <View style={styles.container}>
    <FlatList
      data={todos}
      renderItem={({ item, index }) => (
        <View
          style={{
            borderWidth: 1,
            borderColor: item.completed
              ? "#eaeaea"
              : colors[index % colors.length],
            borderRadius: 15,
            padding: 20,
            margin: 5,
            backgroundColor: item.completed
              ? "#eaeaea"
              : colors[index % colors.length]
          }}
        >
          <TouchableOpacity onPress={() => toggleTodo(item.id)}>
            <Text
              style={{
                fontSize: 22,
                color: item.completed ? "grey" : "black",
                textDecorationLine: item.completed ? "line-through" : "none"
              }}
            >
              {item.text}
            </Text>
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
