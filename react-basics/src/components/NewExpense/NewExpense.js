import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";

const NewExpense = (props) => {
  const [addNewExpenseVisible, setaddNewExpenseVisible] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = { ...enteredExpenseData, id: Math.random().toString() };
    console.log(ExpenseData);
    props.onAddExpense(ExpenseData);
  };

  const addNewExpenseVisiblilityHandler = () => {
    setaddNewExpenseVisible((prevValue) => {
      return !prevValue;
    });
  };

  if (addNewExpenseVisible) {
    return (
      <div className="new-expense">
        <AddNewExpense onChangeVisibility={addNewExpenseVisiblilityHandler} />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
  }
};

export default NewExpense;
