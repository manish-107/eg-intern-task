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

  // Close edit dilogBox when clicked outside
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setEditView({ ...editView, showEditText: false });
    }
  };

  // Access the ReloadContext 
  const Rcontext = useContext(ReloadContext);

  // Check if context is defined
  if (!Rcontext) {
    throw new Error("ReloadContext must be used within a ReloadProvider");
  }
// Use the context to get reloadState and setReloadState
  const { setReloadState } = Rcontext;

  //Edit todo value
  const editTodoValue = () => {
    const savedTodos = localStorage.getItem("Todo");

    if (savedTodos) {
      const todos = JSON.parse(savedTodos);

      //Get todo by id and update todo
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 backdrop-blur-sm"
      onClick={handleClickOutside}
    >
      <div className="flex h-60 w-96 flex-col gap-6 rounded-xl border-2 border-black bg-[#2D70FD] px-4 py-2 text-white shadow-lg">
        <h3 className="mt-3 pl-3 pt-3 text-xl font-bold">Edit Todo</h3>
        <div className="flex flex-col gap-3">
          <input
            className="rounded-lg p-3 text-black"
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
            className="rounded-lg bg-black py-3 text-white"
            onClick={editTodoValue}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
