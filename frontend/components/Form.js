import React, { useState } from "react";

export default function Form(props) {
  const { handleAddTodo, handleCompleted } = props;

  const [newTodo, setNewTodo] = useState("");

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (newTodo.trim()) {
      handleAddTodo(newTodo);
      setNewTodo(" ");
    } else {
      alert("Please add a task");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleChange}></input>{" "}
        <button type="submit"> Add To Do </button>
        <br />
        <br />
      </form>
      <button onClick={handleCompleted}> Hide Completed </button>
    </div>
  );
}
