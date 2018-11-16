import React from "react";

const Todo = ({ todo, index, completeTodo, removeTodo }) => (
  <li className={todo.isCompleted ? "completed" : ""}>
    <div className="view" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <input checked={todo.isCompleted || false}  type="checkbox" className="toggle" onChange={() => completeTodo(index)}>
      </input>
      <label>{todo.text}</label>
        {todo.isCompleted ? (<button className='destroy' onClick={() => removeTodo(index)}></button>) : (null)}
    </div>
  </li>
);

export default Todo;
