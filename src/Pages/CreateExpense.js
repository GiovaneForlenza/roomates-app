import React, { useContext } from "react";
import { IoMdArrowBack } from "react-icons/io";

import { CreateExpenseContext } from "../Contexts/CreateExpenseContext";

import "../Style/global.scss";
import "../Style/CreateExpense/createExpense.scss";
import "../Style/GeneralStyle/containerHeader.scss";

function CreateExpense() {
  const { setIsCreateExpenseOpen } = useContext(CreateExpenseContext);
  function handleClick() {
    setIsCreateExpenseOpen(false);
  }
  return (
    <div className="createExpenseContainer">
      <div className="createExpenseHeader">
        <div
          className="closeCreateExpense roundButtonSmall"
          onClick={handleClick}
        >
          <IoMdArrowBack />
        </div>
      </div>
      Create Expense
    </div>
  );
}

export default CreateExpense;
