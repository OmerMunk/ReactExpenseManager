import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";

const Expenses = (props) => {

    return (
        <Card className="expenses">
            <ExpenseItem data={props.items[0]}/>
            <ExpenseItem data={props.items[1]}/>
            <ExpenseItem data={props.items[2]}/>
            <ExpenseItem data={props.items[3]}/>
        </Card>
    )
}

export default Expenses