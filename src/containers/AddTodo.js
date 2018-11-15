import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

class AddTodo extends Component {
  state = {
    text: ""
  };

  addTodo = text => {
    if (text.trim() === "") {
      return null;
    }
    this.props.dispatch(addTodo(text));
    this.setState({ text: "" });
  };

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50,
          borderWidth: 1,
          borderColor: "#f2f2e1",
          backgroundColor: "#eaeaea",
          marginHorizontal: 20,
          borderRadius: 20,
          paddingHorizontal: 20,
          elevation: 5,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 20,
          shadowOpacity: 0.8,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          style={{ flex: 1 }}
          placeholder="Eg. Create A New Todo"
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View
            style={{
              height: 50,
              flex: 1,
              padding: 10,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Icon name="md-add" size={30} color="salmon" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
