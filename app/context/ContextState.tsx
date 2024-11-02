"use client";
import { createContext, ReactNode, useState } from "react";

// Define types for the context
interface ReloadContextType {
  reloadState: number;
  setReloadState: React.Dispatch<React.SetStateAction<number>>;
}

interface ToastProps {
  toastMessage: string;
  color: string;
  showToast: boolean;
}

interface Props {
  children: ReactNode;
}

// Create the context with a default value
export const ReloadContext = createContext<ReloadContextType | undefined>(
  undefined
);

export const ToastContext = createContext<{
  showToastMessage: ToastProps;
  setShowToastMessage: React.Dispatch<React.SetStateAction<ToastProps>>;
}>({
  showToastMessage: {
    toastMessage: "",
    color: "",
    showToast: false,
  },
  setShowToastMessage: () => {}, // Default empty function for TypeScript compatibility
});

// Create a provider component for ReloadContext
export const ReloadProvider = ({ children }: Props) => {
  const [reloadState, setReloadState] = useState<number>(0);

  const [showToastMessage, setShowToastMessage] = useState<ToastProps>({
    toastMessage: "",
    color: "",
    showToast: false,
  });

  return (
    <ToastContext.Provider value={{ showToastMessage, setShowToastMessage }}>
      <ReloadContext.Provider value={{ reloadState, setReloadState }}>
        {children}
      </ReloadContext.Provider>
    </ToastContext.Provider>
  );
};
