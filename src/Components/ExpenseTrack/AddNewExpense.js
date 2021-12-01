import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "../../Style/Expenses-Track/addNewExpense.scss";

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
