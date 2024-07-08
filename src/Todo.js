import { Button } from "./Button";

export function Todo({ todoObject, onCompletedTodo, onDeleteTodo }) {
  return (
    <li>
      <div className="todo-labels">
        <h1
          className={`${
            todoObject.completed ? "todo-name-completed" : "todo-name"
          }`}
        >
          {todoObject.name}
        </h1>
        <p className={`${todoObject.completed ? "todo-name-completed" : ""}`}>
          {todoObject.description}
        </p>
      </div>
      <div className="todo-buttons">
        <Button
          onClick={() => onCompletedTodo(todoObject.id)}
          className="button-complete"
        >
          {todoObject.completed ? "Réactiver" : "Compléter"}
        </Button>
        <Button
          onClick={() => onDeleteTodo(todoObject.id)}
          className="button-delete"
        >
          Effacer
        </Button>
      </div>
    </li>
  );
}
