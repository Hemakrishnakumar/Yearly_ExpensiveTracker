import { useState } from "react";
import Chart from "../Chart/Chart.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectedYear, setYear] = useState("2022");
  function changeYearHandler(year) {
    setYear(year);
  }
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === +selectedYear
  );

  return (
    <div className="expenses">
      <ExpensesFilter onSelectedYear={changeYearHandler} />
      <Chart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
}

export default Expenses;
