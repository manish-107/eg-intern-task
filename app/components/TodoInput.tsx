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
      <div className="relative my-4 w-full">
        <input
          type="text"
          placeholder="Add new list item"
          className="border rounded-md p-4 w-full pr-16"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="absolute right-1 m-1 top-1 bottom-1 bg-[#2D70FD] text-white rounded-md px-8 py-2"
        >
          Add
        </button>
      </div>
    </div>
  );
}
