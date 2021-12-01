import React, { useContext } from "react";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import "../../Style/ExpensesTrack/expense.scss";
import { ExpenseContext } from "../../Contexts/ExpenseContext";

const Expense = (props) => {
  const { expenseId, amount, date, whoPaid, store } = props.expense;
  const { setIsSingleRequestOpen } = useContext(ExpenseContext);
  function handleClick() {
    setIsSingleRequestOpen(true);
  }
  return (
    <div
      className="expense-container"
      onClick={() => {
        handleClick();
      }}
    >
      <div className="expense">
        <div className="date">{date}</div>
        <div className="content">
          <div className="amount">${parseFloat(amount).toFixed(2)}</div>
          <div className="whoPaid">{whoPaid}</div>
        </div>
        <div className="icons">
          <FiEdit className="icon" size={20} />
          <AiFillDelete className="icon icon-red" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Expense;
