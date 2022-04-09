import React, { useState } from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.data.title);

    const clickHandler = () => {
        setTitle('Updated!');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate data={props.data}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.data.amount}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>
    )
}
export default ExpenseItem;