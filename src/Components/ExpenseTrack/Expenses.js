import React, { useEffect, useState, useContext } from "react";

import Expense from "./Expense";
import axios from "axios";
import AddNewExpense from "./AddNewExpense";
import Spacer from "../Spacer";
import ExpenseSummary from "./ExpenseSummary";

import { AppContext } from "../../Contexts/AppContext";

function Expenses() {
  const HEROKU_URL = "https://roomates-app.herokuapp.com";
  const [expenses, setExpenses] = useState([]);
  const { herokuURL } = useContext(AppContext);
  useEffect(() => {
    axios.post(`${herokuURL}/get-expenses`).then((res) => {
      if (res.message) {
        console.log("a");
        console.log(res.message);
      } else {
        console.log(res.data);
        setExpenses(res.data);
      }
    });
  }, []);
  return (
    <>
      {expenses.lenght !== 0 ? (
        expenses.map((expense) => {
          return (
            <Expense key={expense.expenseId.toString()} expense={expense} />
          );
        })
      ) : (
        <h1>No data</h1>
      )}
      <AddNewExpense />
      <ExpenseSummary />
      <Spacer height={60} />
    </>
  );
}

export default Expenses;
