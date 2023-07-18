import { React } from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__year">
          {props.data.date.getFullYear()}
        </div>
        <div className="expense-date__month">
          {months[props.data.date.getMonth()]}
        </div>
        <div className="expense-date__day">{props.data.date.getDate()}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <p className="expense-item__price">{props.data.amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
