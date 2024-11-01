"use client";

import { useState } from "react";
import Header from "./components/Header";
import Toast from "./components/Toast";
import TodoInput from "./components/TodoInput";
import { FilterData } from "./components/FilterData";
import { DisplayTodos } from "./components/DisplayTodos";

interface ToastProps {
  toastMessage: string;
  color: string;
  showToast: boolean;
}

export default function Home() {
  const [showToastMessage, setShowToastMessage] = useState<ToastProps>({
    toastMessage: "",
    color: "",
    showToast: false,
  });

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <Header />
      {showToastMessage.showToast && (
        <Toast
          message={showToastMessage.toastMessage}
          color={showToastMessage.color}
        />
      )}
      <TodoInput setShowToastMessage={setShowToastMessage} />
      <FilterData />
      <DisplayTodos />
    </div>
  );
}
