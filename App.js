import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TodoApp from "./src/TodoApp";
import store from "./src/store/index";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
