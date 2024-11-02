"use client";

import { useContext, useEffect, useState } from "react";
import { ReloadContext } from "../context/ContextState";

export default function Footer() {
  const [numberOfTodos, setNumberOfTodos] = useState(0);
  const context = useContext(ReloadContext);

  // Ensure context is defined
  if (!context) {
    throw new Error("ReloadContext must be used within a ReloadProvider");
  }

  const { reloadState, setReloadState } = context;

  const clearAllTodo = () => {
    localStorage.removeItem("Todo");
    setNumberOfTodos(0);
    setReloadState(reloadState + 1); // Trigger reload in other components
  };

  useEffect(() => {
    const localTodo = localStorage.getItem("Todo");
    if (localTodo) {
      const todos = JSON.parse(localTodo);
      setNumberOfTodos(todos.length);
    } else {
      setNumberOfTodos(0); // Reset count if no todos are found
    }
  }, [reloadState]); // Update todos count whenever reloadState changes

  return (
    <div className="flex flex-row justify-between m-4 mt-10 border-t-2 border-gray-300 pt-3">
      <h5>{numberOfTodos} Items in the List</h5>
      <button
        type="button"
        onClick={clearAllTodo}
        style={{ cursor: "pointer", color: "red" }}
      >
        Clear all
      </button>
    </div>
  );
}
