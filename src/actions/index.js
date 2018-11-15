import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionTypes";

export const addTodo = text => ({
  type: ADD_TODO,
  id: new Date().getTime(),
  completed: false,
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});
