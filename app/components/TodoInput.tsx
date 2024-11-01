// components/TodoInput.tsx
import { useState } from "react";
import { showToast } from "../utils/toastUtils";

interface TodoInputProps {
  reloadState: number;
  setReloadState: (reloadState: number) => void;
  setShowToastMessage: (toast: {
    toastMessage: string;
    color: string;
    showToast: boolean;
  }) => void;
}

export default function TodoInput({
  setShowToastMessage,
  reloadState,
  setReloadState,
}: TodoInputProps) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") {
      showToast(setShowToastMessage, "Enter the input field", "red");
    } else {
      const existingTodo = JSON.parse(localStorage.getItem("Todo") || "[]");

      const newTodo = {
        todoId:
          Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 1000),
        text: input,
        completed: false,
      };

      localStorage.setItem("Todo", JSON.stringify([...existingTodo, newTodo]));

      // Correctly typing the previous state
      setReloadState(reloadState + 1);

      setInput("");

      showToast(setShowToastMessage, "Todo has been added", "green");
    }
  };

  return (
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
  );
}
