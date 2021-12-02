import React, { useState, useContext } from "react";

import { ExpenseContext } from "../../../Contexts/ExpenseContext";
import { IoMdArrowBack } from "react-icons/io";

import "../../../Style/SingleExpense/singleExpense.scss";

function SingleExpense() {
  const { amount, date, whoPaid, store, fillExpenseInfo } =
    useContext(ExpenseContext);

  function handleClick() {
    fillExpenseInfo("clear");
  }
  return (
    <div className="singleExpenseContainer">
      <div className="singleExpenseHeader">
        <div
          className="closeSingleExpense roundButtonSmall"
          onClick={handleClick}
        >
          <IoMdArrowBack />
        </div>
      </div>
      <div className="singleRequest">
        <div className="amount">${amount}</div>
        <div className="date">{date}</div>
        <div className="whoPaid">{whoPaid}</div>
        <div className="store">{store}</div>
      </div>
    </div>
  );
}

export default SingleExpense;
