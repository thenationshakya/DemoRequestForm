import { createContext, useContext, useState } from "react";

const PageContext = createContext<{
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}>({
  page: 0,
  setPage: null as unknown as React.Dispatch<React.SetStateAction<number>>,
});

export const PageDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [page, setPage] = useState(0);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageState = () => useContext(PageContext);
