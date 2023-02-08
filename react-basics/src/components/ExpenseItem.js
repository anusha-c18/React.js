import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    // one root element only
    <div className="container">
        <p>March 28th, 2001</p>
        <p>Car Insurance</p>
        <div className="amount">
            <p>$39948</p>
        </div>
    </div>
  );
}

export default ExpenseItem;
