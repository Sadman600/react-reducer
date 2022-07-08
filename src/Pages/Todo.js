import React from "react";

const Todo = ({ todo, handleComplite }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.complite}
        onClick={() => handleComplite(todo)}
      />
    </label>
  );
};

export default Todo;
