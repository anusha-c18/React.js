import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2021");

  const setYearFilter = (yearData) => {
    console.log(yearData);
    setEnteredYear(yearData);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selected={enteredYear} onYearChange={setYearFilter} />

      {/* dynamically rendering content using the array of objects in app.js */}

      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
