import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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

  return (
    <Card className="expenses">
      <ExpenseFilter selected={enteredYear} onYearChange={setYearFilter} />
      {/* dynamically rendering content using the array of objects in app.js */}
      <ExpensesChart expenses={filteredYears}></ExpensesChart>
      <ExpensesList items={filteredYears} />
    </Card>
  );
}

export default Expenses;
