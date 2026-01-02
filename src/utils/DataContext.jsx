import { createContext, useContext } from 'react';

const DataContext = createContext();

export function DataProvider({ children, products }) {
  return (
    <DataContext.Provider value={{ articles: products }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
