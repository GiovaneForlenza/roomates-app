import React, { useState, createContext } from "react";

export const CreateExpenseContext = createContext();

export const CreateExpenseContextProvider = (props) => {
  const [isCreateExpenseOpen, setIsCreateExpenseOpen] = useState(false);

  return (
    <CreateExpenseContext.Provider
      value={{ isCreateExpenseOpen, setIsCreateExpenseOpen }}
    >
      {props.children}
    </CreateExpenseContext.Provider>
  );
};
