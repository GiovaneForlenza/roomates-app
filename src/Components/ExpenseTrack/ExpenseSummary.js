import React, { useContext, ùseContext } from "react";
import { ExpenseContext } from "../../Contexts/ExpenseContext";
import "../../Style/ExpensesTrack/expenseSummary.scss";

function ExpenseSummary() {
  const { totalAmountG, totalAmountD } = useContext(ExpenseContext);
  return (
    <div className="expenseResumeContainer">
      <p>G: {totalAmountG}</p>
      <p>D: {totalAmountD}</p>
    </div>
  );
}

export default ExpenseSummary;
