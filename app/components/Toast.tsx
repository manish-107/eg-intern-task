// "use client";

// import { useEffect } from "react";

interface ToastProps {
  message: string;
  color: string;
}

export default function Toast({ message, color }: ToastProps) {
  // useEffect(()=>{
  //     const timer = setTimeout(()=>{

  //     },3000)
  // })

  return (
    <div
      className={`fixed top-4 right-4 ${
        color == "red" ? "bg-red-500" : "bg-orange-400"
      } text-white px-4 py-2 rounded shadow-lg z-50 animate-slide-in`}
    >
      {message}
    </div>
  );
}
