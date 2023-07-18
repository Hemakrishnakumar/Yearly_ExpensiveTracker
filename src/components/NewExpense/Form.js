import React from "react";
import "./Form.css";

const Form = (props) => {
  var title = "";
  var amount = 0;
  var date;
  const titleChangeHandler = (event) => {
    title = event.target.value;
  };
  const amountChangeHandler = (e) => {
    amount = +e.target.value;
  };
  const dateChangeHandler = (e) => {
    date = e.target.value;
  };
  function saveExpense(e) {
    e.preventDefault();
    if (title !== "" && amount > 0 && date) {
      const newExpense = {
        id: Math.random(),
        title: title,
        amount: amount,
        date: new Date(date),
      };
      props.onSubmit(newExpense);
    }
    props.onCancel();
  }
  return (
    <form onSubmit={saveExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default Form;
