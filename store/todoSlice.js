import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  /*{
    text: "buy coffee",
    completed: true,
    id: Math.random() * 101,
  },
  {
    text: "create an app",
    completed: false,
    id: Math.random() * 101,
  },
  {
    text: "play on the switch",
    completed: true,
    id: Math.random() * 101,
  },*/
];
const todosInfoState = [
  /*{
    text: "buy coffee",
    completed: true,
    id: Math.random() * 101,
  },
  {
    text: "create an app",
    completed: false,
    id: Math.random() * 101,
  },
  {
    text: "play on the switch",
    completed: false,
    id: Math.random() * 101,
  },*/
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        text: action.payload,
        completed: false,
        id: Math.random() * 101,
      };
      state.push(newTodo);
      todosInfoState.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return (
        (state = state.filter((todo) => todo.id != action.payload.id)),
        (todosInfoState = state)
      );
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
      todosInfoState[index] = state[index].completed;
    },
    itemsCompleted: (state, action) => {},
    uncompleted: (state, action) => {},
    clearCompleted: (state, action) => {},
  },
});

export default todoSlice.reducer;
export const {
  addTodo,
  deleteTodo,
  toggleComplete,
  itemsCompleted,
  uncompleted,
  clearCompleted,
} = todoSlice.actions;
