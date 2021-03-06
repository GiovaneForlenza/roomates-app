import React, { useEffect, useState, useContext } from "react";

import Expense from "./Expense";
import axios from "axios";
import AddNewExpense from "./AddNewExpense";
import Spacer from "../Spacer";
import ExpenseSummary from "./ExpenseSummary";

import { AppContext } from "../../Contexts/AppContext";
import { ExpenseContext } from "../../Contexts/ExpenseContext";
import "../../Style/ExpensesTrack/expenses.scss";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const { herokuURL } = useContext(AppContext);
  const { totalAmountG, setTotalAmountG, totalAmountD, setTotalAmountD } =
    useContext(ExpenseContext);

  function addToAmount(whoPaid, amount) {
    if (whoPaid === "G") {
      console.log("a");
      setTotalAmountG(totalAmountG + 1);
    } else {
      setTotalAmountD(parseFloat(totalAmountD) + parseFloat(amount));
    }
  }
  useEffect(() => {
    axios.get(`${herokuURL}/get-expenses`).then((res) => {
      if (res.message) {
        console.log(res.message);
      } else {
        setExpenses(res.data);
      }
    });
  }, []);

  return (
    <div className="expensesContainer">
      {expenses.length !== 0 ? (
        <>
          {expenses.map((expense) => {
            console.log(expense);
            return (
              <Expense key={expense.expenseId.toString()} expense={expense} />
            );
          })}
          {/* <ExpenseSummary />
          <Spacer height={60} /> */}
        </>
      ) : (
        <div className="noExpensesContainer">
          <span>No expenses this week</span>
        </div>
      )}
      <AddNewExpense />
    </div>
  );
}

export default Expenses;
