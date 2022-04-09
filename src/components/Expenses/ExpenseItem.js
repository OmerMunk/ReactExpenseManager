import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

    return (
        <Card className="expense-item">
            <ExpenseDate data={props.data}/>
            <div className="expense-item__description">
                <h2>{props.data.title}</h2>
                <div className="expense-item__price">${props.data.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;