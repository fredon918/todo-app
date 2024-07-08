import { Todo } from "./Todo";

export function TodoDisplay({ todos, onCompletedTodo, onDeleteTodo }) {
  return (
    <div className="todo-display">
      <ul>
        {todos.map((todo) => (
          <Todo
            todoObject={todo}
            onCompletedTodo={onCompletedTodo}
            onDeleteTodo={onDeleteTodo}
            key={todo.id}
          ></Todo>
        ))}
      </ul>
    </div>
  );
}
