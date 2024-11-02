import { useContext } from "react";
import { ReloadContext } from "../context/ContextState";

interface EditTodoProps {
  editView: { showEditText: boolean; todoText: string; edittodoId: number };
  setEditView: (value: {
    showEditText: boolean;
    todoText: string;
    edittodoId: number;
  }) => void;
}

interface TodoData {
  todoId: number;
  text: string;
  completed: boolean;
}

export default function EditTodo({ editView, setEditView }: EditTodoProps) {
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setEditView({ ...editView, showEditText: false });
    }
  };

  // Use the context to get reloadState and setReloadState
  const context = useContext(ReloadContext);

  // Check if context is defined
  if (!context) {
    throw new Error("ReloadContext must be used within a ReloadProvider");
  }

  const { setReloadState } = context;

  const editTodoValue = () => {
    const savedTodos = localStorage.getItem("Todo");
    if (savedTodos) {
      const todos = JSON.parse(savedTodos);

      const updatedTodos = todos.map((todo: TodoData) =>
        todo.todoId === editView.edittodoId
          ? { ...todo, text: editView.todoText }
          : todo
      );

      localStorage.setItem("Todo", JSON.stringify(updatedTodos));
      setReloadState((prev) => prev + 1);
      setEditView({ ...editView, showEditText: false });
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50"
      onClick={handleClickOutside}
    >
      <div className="bg-green-700 w-96 h-60 gap-6 border-2 border-black rounded-md flex flex-col text-white px-4 py-2 shadow-lg">
        <h3 className="text-xl font-bold pt-3 mt-3 pl-3">Edit Todo</h3>
        <div className="flex flex-col gap-3">
          <input
            className="p-3 text-black rounded-lg"
            type="text"
            name="edittodo"
            id="edittodo"
            placeholder="Enter the todo to edit"
            value={editView.todoText}
            onChange={(e) =>
              setEditView({ ...editView, todoText: e.target.value })
            }
          />
          <button
            type="button"
            className="bg-black text-white py-3 rounded-lg"
            onClick={editTodoValue}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
