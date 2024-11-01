"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Toast from "./components/Toast";
import TodoInput from "./components/TodoInput";
import { FilterData } from "./components/FilterData";

interface ToastProps {
  toastMessage: string;
  color: string;
  showToast: boolean;
}

interface TodoData {
  todoId: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [showToastMessage, setShowToastMessage] = useState<ToastProps>({
    toastMessage: "",
    color: "",
    showToast: false,
  });
  const [reloadState, setReloadState] = useState<number>(0);
  const [todoData, setTodoData] = useState<TodoData[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("Todo");
    if (storedData) {
      setTodoData(JSON.parse(storedData) as TodoData[]);
    }
  }, [reloadState]);

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
        <Header />
        {showToastMessage.showToast && (
          <Toast
            message={showToastMessage.toastMessage}
            color={showToastMessage.color}
          />
        )}
        <TodoInput
          setReloadState={setReloadState}
          reloadState={reloadState}
          setShowToastMessage={setShowToastMessage}
        />
        <FilterData
          setReloadState={setReloadState}
          reloadState={reloadState}
          todoData={todoData}
        />
      </div>
    </div>
  );
}
