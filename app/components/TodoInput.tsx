"use client";

import { useState } from "react";

interface TodoItemProps {
  todoId: number;
  text: string;
  completed: boolean;
}

export default function TodoInput() {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") {
      console.log("Empty");
    } else {
      // Retrieve existing todos from localStorage
      const existingTodo = JSON.parse(
        localStorage.getItem("Todo") || "[]"
      ) as TodoItemProps[];

      // Create new todo item
      const newTodo: TodoItemProps = {
        todoId:
          Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 1000),
        text: input,
        completed: false,
      };

      // Save updated todos back to localStorage
      localStorage.setItem("Todo", JSON.stringify([...existingTodo, newTodo]));

      const data = localStorage.getItem("Todo");
      console.log("Updated Todos:", JSON.parse(data || "[]"));

      setInput("");
    }
  };

  return (
    <div className="flex items-center gap-2 my-4">
      <input
        type="text"
        placeholder="Add new list item"
        className="border rounded-md p-2 flex-grow"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white rounded-md px-4 py-2"
      >
        Add
      </button>
    </div>
  );
}
