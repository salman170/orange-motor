import React, { createContext, useContext, useState } from "react";

const ModelContext = createContext();
export const useModelContext = () => {
  return useContext(ModelContext);
};

export const ModelProvider = ({ children }) => {
  const [openEnq, setOpenEnq] = useState(false);
  const [model, setModel] = useState("");

  return (
    <ModelContext.Provider
      value={{
        openEnq,
        setOpenEnq,
        model,
        setModel,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};
