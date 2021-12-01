import React from "react";
import DateContainer from "./DateContainer";
import Expenses from "./Expenses";

import "../../Style/ExpensesTrack/trackContainer.scss";

function ExpensesTrack() {
  return (
    <div className="tracker-container">
      <DateContainer />
      <Expenses />
    </div>
  );
}

export default ExpensesTrack;
