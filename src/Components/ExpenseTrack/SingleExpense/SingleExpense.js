import React, { useState, useContext } from "react";

import { ExpenseContext } from "../../../Contexts/ExpenseContext";

function SingleExpense() {
  const { isSingleRequestOpen } = useContext(ExpenseContext);
  return (
    <div className="singleExpenseContainer">
      {isSingleRequestOpen ? (
        <div className="singleRequest">Single Request</div>
      ) : null}
    </div>
  );
}

export default SingleExpense;
