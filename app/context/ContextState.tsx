"use client";
import { createContext, ReactNode, useState } from "react";

// Types for the ReloadContext
interface ReloadContextType {
  reloadState: number; 
  setReloadState: React.Dispatch<React.SetStateAction<number>>; 
}

// Types for the Toast message properties
interface ToastProps {
  toastMessage: string; 
  color: string; 
  showToast: boolean; 
}

interface Props {
  children: ReactNode;
}

// Create the ReloadContext with a default value of undefined
export const ReloadContext = createContext<ReloadContextType | undefined>(
  undefined
);

// Create the ToastContext with default values for managing toast messages
export const ToastContext = createContext<{
  showToastMessage: ToastProps; 
  setShowToastMessage: React.Dispatch<React.SetStateAction<ToastProps>>; 
}>({
  showToastMessage: {
    toastMessage: "", 
    color: "", 
    showToast: false, 
  },
  setShowToastMessage: () => {},
});

// provider component for the ReloadContext
export const ReloadProvider = ({ children }: Props) => {
  // State to manage the reload count
  const [reloadState, setReloadState] = useState<number>(0);

  // State to manage the visibility and content of the toast message
  const [showToastMessage, setShowToastMessage] = useState<ToastProps>({
    toastMessage: "", 
    color: "", 
    showToast: false, 
  });

  return (
    // Provide the ToastContext and ReloadContext to the children components
    <ToastContext.Provider value={{ showToastMessage, setShowToastMessage }}>
      <ReloadContext.Provider value={{ reloadState, setReloadState }}>
        {children} 
      </ReloadContext.Provider>
    </ToastContext.Provider>
  );
};
