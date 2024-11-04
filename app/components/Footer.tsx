"use client";

import { useContext, useEffect, useState } from "react";
import { ReloadContext, ToastContext } from "../context/ContextState";
import { showToast } from "../utils/toastUtils";

export default function Footer() {
  
  const [numberOfTodos, setNumberOfTodos] = useState(0);
  
 // Access the ReloadContext and ToastContext
  const Rcontext = useContext(ReloadContext);
  const Tcontext = useContext(ToastContext);

  // Check if context is defined
  if (!Rcontext || !Tcontext) {
    throw new Error("ReloadContext must be used within a ReloadProvider");
  }

  // Get State from context
  const { reloadState, setReloadState } = Rcontext;
  const { setShowToastMessage } = Tcontext;

  //Set total number of todos
  useEffect(() => {
    const localTodo = localStorage.getItem("Todo");
    if (localTodo) {
      const todos = JSON.parse(localTodo);
      setNumberOfTodos(todos.length);
    } else {
      // Reset count if no todos are found
      setNumberOfTodos(0); 
    }
  }, [reloadState]);

  // Clear all todos from localStorage
  const clearAllTodo = () => {
    if (numberOfTodos === 0) {
      showToast(setShowToastMessage, "No todos to delete", "red");
      return;
    }
    localStorage.removeItem("Todo");
    setNumberOfTodos(0);
    showToast(setShowToastMessage, "All todo cleared", "red");
    setReloadState((prev) => prev + 1); // Trigger reload in other components
  };

  return (
    <div className="m-4 mt-10 flex flex-row justify-between border-t-2 border-[#EEEEEE] pt-3">
      <h5 className="text-[#B1BACB]">{numberOfTodos} Items in the List</h5>
      <button
        type="button"
        onClick={clearAllTodo}
        style={{ cursor: "pointer", color: "#B1BACB" }}
      >
        Clear all
      </button>
    </div>
  );
}
