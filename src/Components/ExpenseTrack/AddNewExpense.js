import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "../../Style/ExpensesTrack/addNewExpense.scss";

function AddNewExpense() {
  return (
    <div
      className="addNewExpenseContainer"
      onClick={() => {
        alert("a");
      }}
    >
      <AiOutlinePlus />
    </div>
  );
}

export default AddNewExpense;
