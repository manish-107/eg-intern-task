"use client";
import { useEffect, useState } from "react";

//Types for toast message props
interface ToastProps {
  message: string;
  color: string;
}

export default function Toast({ message, color }: ToastProps) {
  const [animateClass, setAnimateClass] = useState("animate-slide-in");

  useEffect(() => {
    // Slide-out animation after 3 seconds
    const timer = setTimeout(() => {
      setAnimateClass("animate-slide-out");
    }, 2800);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-20 right-4 ${
        color === "red" ? `bg-red-500` : `bg-green-500`
      } text-white px-4 py-2 rounded ${animateClass}`}
    >
      {message}
    </div>
  );
}
