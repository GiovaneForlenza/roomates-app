import React, { useState, createContext } from "react";

export const ExpenseContext = createContext();

export const ExpenseContextProvider = (props) => {
  const [isSingleRequestOpen, setIsSingleRequestOpen] = useState(false);
  const [expenseId, setExpenseId] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [whoPaid, setWhoPaid] = useState("");
  const [store, setStore] = useState("");

  return (
    <ExpenseContext.Provider
      value={{
        isSingleRequestOpen,
        setIsSingleRequestOpen,
        expenseId,
        setExpenseId,
        amount,
        setAmount,
        date,
        setDate,
        whoPaid,
        setWhoPaid,
        store,
        setStore,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};
