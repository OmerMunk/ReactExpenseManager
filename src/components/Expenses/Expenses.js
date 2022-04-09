import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangedHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
                <ExpenseItem data={props.items[0]}/>
                <ExpenseItem data={props.items[1]}/>
                <ExpenseItem data={props.items[2]}/>
                <ExpenseItem data={props.items[3]}/>
            </Card>
        </div>
    )
}

export default Expenses