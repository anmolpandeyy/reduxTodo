export const addTodo = text => ({
  type: "ADD_TODO",
  id: new Date().getTime(),
  completed: false,
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});
