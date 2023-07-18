import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const dummyExpenses = [
  {
    id: 1,
    title: "Zomato Food",
    amount: 120,
    date: new Date(2021, 2, 28),
  },
  {
    id: 2,
    title: "Books",
    amount: 150,
    date: new Date(2022, 5, 30),
  },
  {
    id: 3,
    title: "Movie",
    amount: 300,
    date: new Date(2020, 6, 11),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  function saveData(data) {
    setExpenses((expenses) => [data, ...expenses]);
  }
  return (
    <div>
      <NewExpense saveData={saveData}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
