import { useState } from "react";
import { Button } from "./Button";

export function TodoForm({ onAddTodo }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !description) return;

    const newTodo = { id: Date.now(), name, description, completed: false };

    onAddTodo(newTodo);

    setName("");
    setDescription("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="fields-container">
        <div className="form-field">
          <label>Nom</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-field">
          <label>Description</label>
          <input
            type="text"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
      </div>
      <Button>Ajouter Todo</Button>
    </form>
  );
}
