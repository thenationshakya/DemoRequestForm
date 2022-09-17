import { createContext, useContext } from "react";

export const PageContext = createContext<{
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}>({
  page: 0,
  setPage: null as unknown as React.Dispatch<React.SetStateAction<number>>,
});

export function usePageState() {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error("usePageState must be used within a PageContext.Provider");
  }
  return context;
}
