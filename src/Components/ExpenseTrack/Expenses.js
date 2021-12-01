import React, { useEffect, useState, useContext } from "react";

import Expense from "./Expense";
import axios from "axios";
import AddNewExpense from "./AddNewExpense";
import Spacer from "../Spacer";
import ExpenseSummary from "./ExpenseSummary";

import { AppContext } from "../../Contexts/AppContext";
import "../../Style/ExpensesTrack/expenses.scss";

function Expenses() {
  const HEROKU_URL = "https://roomates-app.herokuapp.com";
  const [expenses, setExpenses] = useState([]);
  const { herokuURL } = useContext(AppContext);
  useEffect(() => {
    axios.get(`${HEROKU_URL}/get-expenses`).then((res) => {
      if (res.message) {
        console.log(res.message);
      } else {
        setExpenses(res.data);
      }
    });
  }, []);
  return (
    <div className="expenses-container">
      {expenses.length !== 0 ? (
        <>
          {expenses.map((expense) => {
            return (
              <Expense key={expense.expenseId.toString()} expense={expense} />
            );
          })}
          {/* <ExpenseSummary />
          <Spacer height={60} /> */}
        </>
      ) : (
        <div className="no-expenses-container">
          <span>No expenses this week</span>
        </div>
      )}
      <AddNewExpense />
    </div>
  );
}

export default Expenses;
