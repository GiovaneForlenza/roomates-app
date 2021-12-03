import React, { useContext } from "react";
import SingleExpense from "../Components/ExpenseTrack/SingleExpense/SingleExpense";
import ExpensesTrack from "../Components/ExpenseTrack/ExpensesTrack";
import { ExpenseContext } from "../Contexts/ExpenseContext";
import { CreateExpenseContext } from "../Contexts/CreateExpenseContext";

import "../Style/home.scss";
import CreateExpense from "./CreateExpense";

function Home() {
  const { isSingleRequestOpen } = useContext(ExpenseContext);
  const { isCreateExpenseOpen } = useContext(CreateExpenseContext);

  return (
    <div className="homeContainer">
      {isCreateExpenseOpen ? (
        <CreateExpense />
      ) : isSingleRequestOpen ? (
        <SingleExpense />
      ) : (
        <ExpensesTrack />
      )}
    </div>
  );
}

export default Home;
