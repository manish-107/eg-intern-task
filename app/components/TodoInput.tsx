"use client";
import { useContext, useState } from "react";
import { showToast } from "../utils/toastUtils";
import { ReloadContext, ToastContext } from "../context/ContextState";
import Toast from "./Toast";

export default function TodoInput() {
  const [input, setInput] = useState("");

  // Get reloadState and setReloadState from context
  const Rcontext = useContext(ReloadContext);
  const TContext = useContext(ToastContext);

  // Check if context is defined
  if (!Rcontext || !TContext) {
    throw new Error("ReloadContext must be used within a ReloadProvider");
  }

  const { setReloadState } = Rcontext;
  const { setShowToastMessage, showToastMessage } = TContext;

  const handleAdd = () => {
    if (input.trim() === "") {
      showToast(setShowToastMessage, "Enter the input field", "red");
    } else {
      // Retrieve existing todos from localStorage or initialize an empty array
      const existingTodo = JSON.parse(localStorage.getItem("Todo") || "[]");

      // Determine the new todoId
      let newTodoId;
      if (existingTodo.length === 0) {
        // Start with 1001 if there are no existing todos
        newTodoId = 1001;
      } else {
        // Increment the last todoId by 1 if there are existing todos
        newTodoId = existingTodo[existingTodo.length - 1].todoId + 1;
      }

      // Create the new todo item
      const newTodo = {
        todoId: newTodoId,
        text: input,
        completed: false,
      };

      // Add the new todo to the existing array and save it back to localStorage
      localStorage.setItem("Todo", JSON.stringify([...existingTodo, newTodo]));

      // Trigger a re-render or state update if needed
      setReloadState((prev) => prev + 1);

      // Clear the input field
      setInput("");

      // Show success message
      showToast(setShowToastMessage, "Todo has been added", "green");
    }
  };

  return (
    <div>
      {showToastMessage.showToast && (
        <Toast
          message={showToastMessage.toastMessage}
          color={showToastMessage.color}
        />
      )}
      <div className="flex flex-col md:flex-row items-center gap-2 my-4">
        <input
          type="text"
          placeholder="Add new list item"
          className="border rounded-md p-2 w-full md:flex-grow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white rounded-md w-full md:w-3/12 px-6 py-2 mt-2 md:mt-0"
        >
          Add
        </button>
      </div>
    </div>
  );
}
