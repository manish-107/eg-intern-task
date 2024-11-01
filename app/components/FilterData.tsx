// FilterData.tsx

import { useState } from "react";
import { DisplayTodos } from "./DisplayTodos";

interface TodoData {
  todoId: number;
  text: string;
  completed: boolean;
}

interface FilterDataProps {
  reloadState: number;
  setReloadState: (reloadState: number) => void;
  todoData: TodoData[];
}

export const FilterData = ({
  setReloadState,
  reloadState,
  todoData,
}: FilterDataProps) => {
  const [selectedSort, setSelectedSort] = useState<string>("");

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSort(event.target.value);
    setReloadState(reloadState + 1);
  };

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
            // If both are the same, sort by todoId (or creation date if available)
            return a.todoId - b.todoId; // Adjust this if you have a creation date
          }
          return a.completed ? 1 : -1; // Uncompleted (false) first, completed (true) last
        });
    }
  };

  return (
    <div className="mt-10">
      <div className="flex justify-around flex-col md:flex-row">
        <h1>Sort By :</h1>
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
        {sortedTodos().map((todo) => (
          <DisplayTodos
            key={todo.todoId}
            reloadState={reloadState}
            setReloadState={setReloadState}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
};
