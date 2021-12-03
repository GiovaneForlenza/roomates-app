import React, { useContext, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

import { CreateExpenseContext } from "../Contexts/CreateExpenseContext";

import "../Style/global.scss";
import "../Style/CreateExpense/createExpense.scss";
import "../Style/GeneralStyle/containerHeader.scss";

function CreateExpense() {
  const [expenseTitle, setExpenseTitle] = useState("");
  const { setIsCreateExpenseOpen } = useContext(CreateExpenseContext);
  function handleClick() {
    setIsCreateExpenseOpen(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="createExpenseContainer">
      <div className="createExpenseHeader">
        <div className="closeCreateExpense" onClick={handleClick}>
          <AiOutlineClose />
        </div>
        <div className="completeCreateExpense">
          <AiOutlineCheck />
        </div>
      </div>
      <div className="priceContainer">
        <div className="price">
          <div className="amountContainer">
            <div className="amount">
              <input type="text" pattern="\d*" />
            </div>
          </div>
        </div>
        <div className="optionsContainer">
          <div className="whoPaidContainer">
            <div className="label">Who paid</div>
            <div className="whoPaid">G</div>
          </div>
          <div className="storeContainer">
            <div className="label">Store</div>
            <div className="store">Walmart</div>
          </div>
        </div>
      </div>
      <div className="keyboardContainer">
        <div className="keyboard"></div>
      </div>
      {/* <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="line">
          <label htmlFor="">Title</label>
          <input
            type="text"
            onChange={(e) => setExpenseTitle(e.target.value)}
          />
        </div>
        <div className="line">
          <label htmlFor="">Price</label>
          <input
            type="text"
            onChange={(e) => setExpenseTitle(e.target.value)}
          />
        </div>
        <div className="line">
          <label htmlFor="">Store</label>
          <input
            type="text"
            onChange={(e) => setExpenseTitle(e.target.value)}
          />
        </div>
        <div className="line">
          <label htmlFor="">Who Paid</label>
          <input
            type="text"
            onChange={(e) => setExpenseTitle(e.target.value)}
          />
        </div>
        <div className="line">
          <label htmlFor="">Date</label>
          <input
            type="text"
            onChange={(e) => setExpenseTitle(e.target.value)}
          />
        </div>
        <div className="line">
          <label htmlFor="">Notes</label>
          <input
            type="text"
            onChange={(e) => setExpenseTitle(e.target.value)}
          />
        </div>
        <div className="line">
          <label htmlFor="">Store</label>
          <input
            type="text"
            onChange={(e) => setExpenseTitle(e.target.value)}
          />
        </div>
        <div className="line">
          <label htmlFor="">Store</label>
          <input
            type="text"
            onChange={(e) => setExpenseTitle(e.target.value)}
          />
        </div>
        <input type="submit" value="Create Expense" />
      </form> */}
    </div>
  );
}

export default CreateExpense;
