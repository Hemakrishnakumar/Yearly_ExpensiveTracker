import React, { useState } from "react";
import "./NewExpense.css";
import Form from "./Form.js";

function NewExpense(props) {
  const [isFormVisible, setFormVisibilty] = useState(false);
  let content = <button onClick={showForm}>Add Expense</button>;
  if (isFormVisible)
    content = <Form onSubmit={props.saveData} onCancel={hideForm}></Form>;
  function hideForm() {
    setFormVisibilty(false);
  }
  function showForm() {
    setFormVisibilty(true);
  }
  return <div className="new-expense">{content}</div>;
}

// const NewExpense = (props) => {
//   const [isFormVisible, setFormVisibilty] = useState(false);
//   function showForm() {
//     setFormVisibilty(true);
//   }
//   function hideForm() {
//     setFormVisibilty(false);
//   }
//   let content = <button onClick={showForm}>Add Expense</button>;
//   if (isFormVisible)
//     content = <Form onCancel={hideForm} onSubmit={props.saveData}></Form>;
//   return <div className="new-expense">{content}</div>;
// };

export default NewExpense;
