import "./ExpenseItem.css";
import React from "react";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "car insurance";
  const expenseAmount = 9293;
  return (
    // one root element only
    <div className="container">
      <p>{expenseDate.toString()}</p>
      <p>{expenseTitle}</p>
      <div className="amount">
        <p>{expenseAmount * 2}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
