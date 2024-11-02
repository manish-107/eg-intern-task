// context/ReloadContext.tsx
import { createContext, ReactNode, useState } from "react";

// Define types for the context
interface ReloadContextType {
  reloadState: number;
  setReloadState: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context with a default value
export const ReloadContext = createContext<ReloadContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

// Create a provider component for ReloadContext
export const ReloadProvider = ({ children }: Props) => {
  const [reloadState, setReloadState] = useState<number>(0);

  return (
    <ReloadContext.Provider value={{ reloadState, setReloadState }}>
      {children}
    </ReloadContext.Provider>
  );
};
