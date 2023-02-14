import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("");
  const [filteredYears, setfilteredYears] = useState(props.items);

  const setYearFilter = (yearData) => {
    setEnteredYear(yearData);
    setfilteredYears(
      props.items.filter((x) => {
        return x.date.getFullYear().toString() === yearData;
      })
    );
  };

  let expensesContent = <p>No expenses found.</p>;
  if (filteredYears.length > 0) {
    expensesContent = filteredYears.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpenseFilter selected={enteredYear} onYearChange={setYearFilter} />
      {/* dynamically rendering content using the array of objects in app.js */}
      {expensesContent}
    </Card>
  );
}

export default Expenses;
