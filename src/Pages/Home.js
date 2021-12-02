import React, { useContext } from "react";
import SingleExpense from "../Components/ExpenseTrack/SingleExpense/SingleExpense";
import ExpensesTrack from "../Components/ExpenseTrack/ExpensesTrack";
import { ExpenseContext } from "../Contexts/ExpenseContext";

import "../Style/home.scss";

function Home() {
  const { isSingleRequestOpen } = useContext(ExpenseContext);

  return (
    <div className="homeContainer">
      {isSingleRequestOpen ? <SingleExpense /> : <ExpensesTrack />}
    </div>
  );
}

export default Home;
