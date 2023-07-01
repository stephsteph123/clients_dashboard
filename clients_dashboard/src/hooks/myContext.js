// MyContext.js
import React, { createContext, useState } from "react";

const MyContext = createContext();

function MyContextProvider({ children }) {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");

  function handleValueAChange(newValue) {
    setValueA(newValue);
  }

  function handleValueBChange(newValue) {
    setValueB(newValue);
  }

  const contextValue = {
    valueA,
    valueB,
    handleValueAChange,
    handleValueBChange
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, MyContextProvider };
