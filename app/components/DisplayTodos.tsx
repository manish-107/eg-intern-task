import { useContext, useEffect, useState } from "react";
import EditTodo from "./EditTodo";
import { ReloadContext, ToastContext } from "../context/ContextState";
import { showToast } from "../utils/toastUtils";

interface TodoData {
  todoId: number;
  text: string;
  completed: boolean;
}

interface DisplayTodosProps {
  todo: TodoData;
}

export const DisplayTodos = ({ todo }: DisplayTodosProps) => {
  const [editView, setEditView] = useState<{
    showEditText: boolean;
    todoText: string;
    edittodoId: number;
  }>({
    showEditText: false,
    todoText: "",
    edittodoId: 0,
  });

  // Use the context to get reloadState and setReloadState
  const Rcontext = useContext(ReloadContext);
  const Tcontext = useContext(ToastContext);

  // Check if context is defined
  if (!Rcontext || !Tcontext) {
    throw new Error("ReloadContext must be used within a ReloadProvider");
  }

  const { reloadState, setReloadState } = Rcontext;
  const { setShowToastMessage } = Tcontext;

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
    setReloadState((prev) => prev + 1);
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

  const deleteTodo = (todoId: number) => {
    const localData = localStorage.getItem("Todo");
    if (localData) {
      const todos: TodoData[] = JSON.parse(localData);

      const updatedTodo = todos.filter(
        (todo: TodoData) => todo.todoId !== todoId
      );
      showToast(setShowToastMessage, "Todo Deleted", "red");
      localStorage.setItem("Todo", JSON.stringify(updatedTodo));
      setReloadState((prev) => prev + 1);
    }
  };

  return (
    <div>
      {editView.showEditText && (
        <EditTodo editView={editView} setEditView={setEditView} />
      )}
      <div className="mx-2 flex items-start rounded-lg p-2 text-[1rem]">
        <div className="flex flex-grow items-start gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => markAsCompleted(todo.todoId, e.target.checked)}
            className="custom-checkbox mt-1 h-5 w-5 flex-shrink-0 rounded-full border-2 border-gray-300 focus:ring-0 sm:h-6 sm:w-6"
          />
          <label
            className={`${
              todo.completed
                ? "line-through text-[#8F98A8]"
                : "text-gray-800 hover:text-[#2D70FD]"
            } text-sm sm:text-base break-words`}
            style={{ maxWidth: "60%", whiteSpace: "normal" }}
          >
            {todo.text}
          </label>
        </div>

        <div className="flex flex-shrink-0 gap-2">
          <button
            type="button"
            onClick={() => editTodo(todo.todoId, todo.text)}
            className="rounded-md bg-green-500 px-3 py-1 text-xs sm:px-6 sm:text-base"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => deleteTodo(todo.todoId)}
            className="rounded-md bg-red-500 px-3 py-1 text-xs sm:px-6 sm:text-base"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
