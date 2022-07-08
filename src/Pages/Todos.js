import React from "react";
import { useReducer } from "react";
import Todo from "./Todo";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complite: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complite: false,
  },
  {
    id: 3,
    title: "Todo 3",
    complite: false,
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLITE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            complite: !todo.complite,
          };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};
const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const handleComplite = (todo) => {
    dispatch({
      type: "COMPLITE",
      id: todo.id,
    });
  };
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} handleComplite={handleComplite} />
      ))}
    </div>
  );
};

export default Todos;
