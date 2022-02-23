import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./todolist.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      //Limpia los espacios y evita que se a;adan textos de solo espacio
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      //Limpia los espacios y evita que se a;adan textos de solo espacio
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id); //Elimina las tareas

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="w-2/6 m-auto text-white">
      <h2
        className="text-xl underline underline-offset-4 decoration-gray-400
        font-fontName pb-8"
        id="utility"
      >
        Utility
      </h2>
      <div className="todo-app">
        <h1>Todo list</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default TodoList;