import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import dateFormat from "dateformat";

import "../../Style/Expenses-Track/dates.scss";

function DateContainer() {
  const [changer, setChanger] = useState(0);
  let firstday, lastday;
  function getFirstLastDay() {
    var curr = new Date();

    var first = curr.getDate() + changer - curr.getDay();
    var last = first + 6;

    firstday = dateFormat(new Date(curr.setDate(first)), "dd mmm").toString();
    lastday = dateFormat(new Date(curr.setDate(last)), "dd mmm");
  }

  getFirstLastDay();
  function changeDate(amount) {
    if (amount === 0) {
      setChanger(amount);
      return;
    }
    setChanger(changer + amount);
  }

  return (
    <div className="dates-container">
      <header className="dates-header">
        <div className="controls">
          <div className="circle" onClick={() => changeDate(-7)}>
            <FiChevronLeft />
          </div>
          <div className="dates">
            {firstday} / {lastday}
          </div>
          <div className="circle" onClick={() => changeDate(7)}>
            <FiChevronRight />
          </div>
        </div>
        <div className="currentDateContainer" onClick={() => changeDate(0)}>
          Current Date
        </div>
      </header>
    </div>
  );
}

export default DateContainer;
