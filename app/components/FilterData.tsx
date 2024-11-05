"use client";

import { useContext, useEffect, useState } from "react";
import { DisplayTodos } from "./DisplayTodos";
import { ReloadContext } from "../context/ContextState";

interface TodoData {
  todoId: number;
  text: string;
  completed: boolean;
}

// Main component for filtering and displaying todo items
export const FilterData = () => {
  // State to track selected sorting option
  const [selectedSort, setSelectedSort] = useState<string>("");

  // State to hold list of todo items
  const [todoData, setTodoData] = useState<TodoData[]>([]);

  // Use the context to get reloadState and setReloadState
  const context = useContext(ReloadContext);

  // Check if context is defined
  if (!context) {
    throw new Error("ReloadContext must be used within a ReloadProvider");
  }

  const { reloadState, setReloadState } = context;

  // useEffect hook to load todo items from local storage when reloadState changes
  useEffect(() => {
    const storedData = localStorage.getItem("Todo");
    if (storedData) {
      setTodoData(JSON.parse(storedData) as TodoData[]);
    } else {
      setTodoData([]);
    }
  }, [reloadState]);

  // Handle sort option change and trigger reload state change to refresh data
  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSort(event.target.value);
    setReloadState((prev) => prev + 1);
  };

  // Function to sort todo items based on selected sort option
  const sortedTodos = () => {
    switch (selectedSort) {
      case "NotCompleted":
        return todoData.filter((todo) => !todo.completed);
      case "Completed":
        return todoData.filter((todo) => todo.completed);
      case "createdDate":
        return [...todoData].sort((a, b) => b.todoId - a.todoId);
      default:
        return [...todoData].sort((a, b) => {
          // First sort by completion status (uncompleted first)
          if (a.completed === b.completed) {
            return a.todoId - b.todoId; // If same, sort by todoId
          }
          return a.completed ? 1 : -1; // Uncompleted (false) first, completed (true) last
        });
    }
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col justify-around gap-3 md:flex-row">
        <h1 className="font-bold">Sort By :</h1>
        <label>
          <input
            type="radio"
            name="sort"
            value="NotCompleted"
            checked={selectedSort === "NotCompleted"}
            onChange={handleSortChange}
          />{" "}
          Not Completed
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="Completed"
            checked={selectedSort === "Completed"}
            onChange={handleSortChange}
          />{" "}
          Completed
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="createdDate"
            checked={selectedSort === "createdDate"}
            onChange={handleSortChange}
          />{" "}
          Recent todo
        </label>
      </div>
      <div className="mt-10">
        {sortedTodos().length !== 0 ? (
          sortedTodos().map((todo) => (
            <DisplayTodos key={todo.todoId} todo={todo} />
          ))
        ) : (
          <NoTodoExists />
        )}
      </div>
    </div>
  );
};

const NoTodoExists = () => {
  return (
    <div>
      <h2 className="text-center font-bold">Todo list is empty</h2>
    </div>
  );
};
