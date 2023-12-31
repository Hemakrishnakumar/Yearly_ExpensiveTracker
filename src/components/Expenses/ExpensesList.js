import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.expenses.length === 0)
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} data={expense} />
      ))}
    </ul>
  );
}

export default ExpensesList;
