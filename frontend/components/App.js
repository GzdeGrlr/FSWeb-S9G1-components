import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    {
      isim: "Learn React",
      id: 1528817077286, // farklı görünüyor olabilir, bunu oluşturmak için timestamp(zaman damgası) kullanabilirsiniz
      tamamlandi: false,
    },
    {
      isim: "Go Cycling",
      id: 1528817084358,
      tamamlandi: false,
    },
  ]);

  const handleAddTodo = (nTodo) => {
    setTodos([...todos, { isim: nTodo, tamamlandi: false, id: Date.now() }]);
  };

  const handleToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, tamamlandi: !todo.tamamlandi };
        }
        return todo;
      })
    );
  };

  const handleCompleted = () => {
    setTodos(todos.filter((todo) => !todo.tamamlandi));
  };

  return (
    <div>
      <TodoList todos={todos} handleToggleCompleted={handleToggleCompleted} />
      <Form
        todos={todos}
        handleAddTodo={handleAddTodo}
        handleCompleted={handleCompleted}
      />
    </div>
  );
}
