import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { CreateExpenseContext } from "../../Contexts/CreateExpenseContext";

import "../../Style/ExpensesTrack/addNewExpense.scss";

function AddNewExpense() {
  const { setIsCreateExpenseOpen } = useContext(CreateExpenseContext);
  return (
    <div
      className="addNewExpenseContainer"
      onClick={() => {
        setIsCreateExpenseOpen(true);
      }}
    >
      <AiOutlinePlus />
    </div>
  );
}

export default AddNewExpense;
