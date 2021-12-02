import React, { useState, createContext } from "react";

export const ExpenseContext = createContext();

export const ExpenseContextProvider = (props) => {
  const [isSingleRequestOpen, setIsSingleRequestOpen] = useState(false);
  const [expenseId, setExpenseId] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [whoPaid, setWhoPaid] = useState("");
  const [store, setStore] = useState("");

  const [totalAmountG, setTotalAmountG] = useState(0);
  const [totalAmountD, setTotalAmountD] = useState(0);

  function fillExpenseInfo(action, expenseId, amount, date, whoPaid, store) {
    if (action === "fill") {
      setExpenseId(expenseId);
      setAmount(amount);
      setDate(date);
      setWhoPaid(whoPaid);
      setStore(store);
      setIsSingleRequestOpen(true);
    } else {
      setExpenseId("");
      setAmount("");
      setDate("");
      setWhoPaid("");
      setStore("");
      setIsSingleRequestOpen(false);
    }
  }

  function addToAmount(whoPaid) {
    if (whoPaid === "G") {
      setTotalAmountG(parseFloat(totalAmountG) + parseFloat(amount));
    } else {
      setTotalAmountD(parseFloat(totalAmountD) + parseFloat(amount));
    }
  }
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
        day,
        setDay,
        month,
        setMonth,
        whoPaid,
        setWhoPaid,
        store,
        setStore,
        totalAmountG,
        setTotalAmountG,
        totalAmountD,
        setTotalAmountD,
        fillExpenseInfo,
        addToAmount,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};
