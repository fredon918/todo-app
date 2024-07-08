import { Header } from "./Header";
import { TodoDisplay } from "./TodoDisplay";
import { TodoForm } from "./TodoForm";
import { useState } from "react";

/*
const todosByDefault = [
  {
    id: Date.now() + 1,
    name: "React",
    description: "Continuer mon projet de TODO",
    completed: false,
  },
  {
    id: Date.now() + 2,
    name: "Cuisine",
    description: "Passer la Passata dans le frigo",
    completed: false,
  },
  {
    id: Date.now() + 3,
    name: "CSS",
    description: "Aligner les éléments dans le projet TODO",
    completed: false,
  },
];
*/

export default function App() {
  const [todos, setTodos] = useState([]);

  function handleDeleteTodo(todoId) {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  }

  function handleCompleteTodo(todoId) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleAddTodo(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  return (
    <div className="app">
      <Header></Header>
      <TodoForm onAddTodo={handleAddTodo}></TodoForm>
      <TodoDisplay
        todos={todos}
        onCompletedTodo={handleCompleteTodo}
        onDeleteTodo={handleDeleteTodo}
      ></TodoDisplay>
    </div>
  );
}
