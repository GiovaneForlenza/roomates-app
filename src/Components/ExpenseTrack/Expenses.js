import React, { useEffect, useState, useContext } from "react";

import Expense from "./Expense";
import axios from "axios";
import AddNewExpense from "./AddNewExpense";
import Spacer from "../Spacer";
import ExpenseSummary from "./ExpenseSummary";

import { AppContext } from "../../Contexts/AppContext";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const { HEROKU_URL } = useContext(AppContext);
  useEffect(() => {
    axios.post(`${HEROKU_URL}/get-expenses`).then((res) => {
      if (res.message) {
        console.log(res.message);
      } else {
        setExpenses(res.data);
      }
    });
  }, []);
  // console.log(expenses);
  return (
    <>
      {expenses.map((expense) => {
        return <Expense key={expense.expenseId.toString()} expense={expense} />;
      })}
      <AddNewExpense />
      <ExpenseSummary />
      <Spacer height={60} />
    </>
  );
}

export default Expenses;
