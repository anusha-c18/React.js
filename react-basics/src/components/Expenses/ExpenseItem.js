import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  let title = props.title;
  const clickHandler = () => {
    title = "updated";
    console.log(title);
  };
  return (
    // one root element only
    <Card className="expense-item ">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description ">
        <h2>{title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Submit</button>
    </Card>
  );
}

export default ExpenseItem;
