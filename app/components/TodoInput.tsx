"use client";
import { useContext, useState } from "react";
import { showToast } from "../utils/toastUtils";
import { ReloadContext, ToastContext } from "../context/ContextState";
import Toast from "./Toast";

export default function TodoInput() {
 
  const [input, setInput] = useState("");

// Access the ReloadContext and ToastContext
  const Rcontext = useContext(ReloadContext);
  const Tcontext = useContext(ToastContext);

  // Check if context is defined
  if (!Rcontext || !Tcontext) {
    throw new Error("ReloadContext must be used within a ReloadProvider");
  }

  // Get State from context
  const { setReloadState } = Rcontext;
  const { setShowToastMessage, showToastMessage } = Tcontext;

  // Add a new to-do item to the list, handling input validation and local storage updates.
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
          className="w-full rounded-md border p-4 pr-16"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="absolute bottom-1 right-1 top-1 m-1 rounded-md bg-[#2D70FD] px-8 py-2 text-white"
        >
          Add
        </button>
      </div>
    </div>
  );
}
