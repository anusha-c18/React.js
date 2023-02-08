import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "car insurance1",
      amount: 343.3,
      date: new Date(2020, 4, 4),
    },
    {
      title: "car insurance2",
      amount: 887.3,
      date: new Date(2020, 4, 24),
    },
    {
      title: "car insurance3",
      amount: 656.3,
      date: new Date(2020, 4, 14),
    },
    {
      title: "car insurance4",
      amount: 543.3,
      date: new Date(2020, 2, 5),
    },
  ]; //array of objects

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
