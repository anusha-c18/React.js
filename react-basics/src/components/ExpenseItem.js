import "./ExpenseItem.css";
import React from "react";

function ExpenseItem(props) {
  return (
    // one root element only
    <div className="container">
      <p>{props.date.toString()}</p>
      <p>{props.title}</p>
      <div className="amount">
        <p>{props.amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
