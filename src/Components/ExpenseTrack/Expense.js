import React, { useContext, useEffect } from "react";
// import { FiEdit } from "react-icons/fi";
// import { AiFillDelete } from "react-icons/ai";

import { ExpenseContext } from "../../Contexts/ExpenseContext";
import "../../Style/ExpensesTrack/expense.scss";

const Expense = (props) => {
  const { expenseId, amount, date, whoPaid, store } = props.expense;
  const { fillExpenseInfo, day, setDay, month, setMonth } =
    useContext(ExpenseContext);

  const parsedAmount = parseFloat(amount).toFixed(2);

  function handleClick() {
    fillExpenseInfo("fill", expenseId, parsedAmount, date, whoPaid, store);
  }

  useEffect(() => {
    setDay(date.substring(0, 2));
    setMonth(date.substring(6, 3));
  }, []);

  return (
    <div
      className="expense-container"
      onClick={() => {
        handleClick();
      }}
    >
      <div className="expense">
        <div className="date">
          <span className="day">{day}</span>
          <span className="month"> {month}</span>
        </div>
        <div className="content">
          <div className="">
            <div className="amount">${parsedAmount}</div>
            <div className="store">{store}</div>
          </div>
          <div className="whoPaid">{whoPaid}</div>
        </div>
        {/* <div className="icons">
          <FiEdit className="icon" size={20} />
          <AiFillDelete className="icon icon-red" size={20} />
        </div> */}
      </div>
    </div>
  );
};

export default Expense;
