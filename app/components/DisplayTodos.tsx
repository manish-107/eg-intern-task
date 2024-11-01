import { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

interface TodoData {
  todoId: number;
  text: string;
  completed: boolean;
}

interface DisplayTodosProps {
  todo: TodoData;
  reloadState: number;
  setReloadState: (reloadState: number) => void;
}

export const DisplayTodos = ({
  todo,
  reloadState,
  setReloadState,
}: DisplayTodosProps) => {
  const [editView, setEditView] = useState<{
    showEditText: boolean;
    todoText: string;
    edittodoId: number;
  }>({
    showEditText: false,
    todoText: "",
    edittodoId: 0,
  });

  const [todoData, setTodoData] = useState<TodoData[]>(() => {
    const savedTodos = localStorage.getItem("Todo");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const markAsCompleted = (todoId: number, completed: boolean) => {
    const updatedTodos = todoData.map((item) =>
      item.todoId === todoId ? { ...item, completed } : item
    );
    localStorage.setItem("Todo", JSON.stringify(updatedTodos));
    setTodoData(updatedTodos);
    setReloadState(reloadState + 1);
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem("Todo");
    if (savedTodos) setTodoData(JSON.parse(savedTodos));
  }, [reloadState]);

  const editTodo = (todoId: number, todoText: string) => {
    setEditView({
      edittodoId: todoId,
      todoText: todoText,
      showEditText: true,
    });
  };

  return (
    <div>
      {editView.showEditText && (
        <EditTodo
          editView={editView}
          reloadState={reloadState}
          setReloadState={setReloadState}
          setEditView={setEditView}
        />
      )}
      <div className="flex justify-between mx-2 p-2 rounded-lg">
        <label
          className={`${
            todo.completed
              ? "line-through"
              : "text-gray-800 hover:text-blue-700"
          } text-lg flex items-center gap-2`}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => markAsCompleted(todo.todoId, e.target.checked)}
            className="custom-checkbox w-6 h-6 rounded-full border-2 border-gray-300 focus:ring-0"
          />
          {todo.text}
        </label>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => editTodo(todo.todoId, todo.text)}
            className="py-1 px-6 rounded-md bg-green-500"
          >
            Edit
          </button>
          <button type="button" className="py-1 px-6 rounded-md bg-red-500">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
