import React from "react";
import "./NewExpense.css";

function AddNewExpense(props) {
  return (
    <div>
      <button onClick={props.onChangeVisibility}>Add New Expense</button>
    </div>
  );
}

export default AddNewExpense;
