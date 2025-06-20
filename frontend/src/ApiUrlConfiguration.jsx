import { createContext, useContext } from "react";

const ApiContext = createContext();

export const ApiUrlConfiguration = ({ children }) => {
 
  const apiConfig = {
    ApiURL: "http://localhost:8000/api",
  };

  return (
    <ApiContext.Provider value={apiConfig}>{children}</ApiContext.Provider>
  );
};

export const useApiConfig = () => useContext(ApiContext);
