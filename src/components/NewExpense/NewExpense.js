import React from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'
const NewExpense = (props) =>{

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {...enteredExpenseData, id: Math.random().toString()};
        console.log("inside new expense")
        console.log(expenseData)
        props.onAddExpense(expenseData);

    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
};

export default NewExpense;