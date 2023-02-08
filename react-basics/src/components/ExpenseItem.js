import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    // one root element only
    // <div className="expense-item">
    //   <ExpenseDate date={props.date}></ExpenseDate>
    //   <p>{props.title}</p>
    //   <div className="amount">
    //     <p>{props.amount}</p>
    //   </div>
    // </div>
    <div className="expense-item ">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
