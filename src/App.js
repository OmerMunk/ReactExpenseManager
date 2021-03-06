import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Book',
        amount: 25.50,
        date: new Date(2020, 7, 14)
    },
    {
        id: 'e2',
        title: 'Oven',
        amount: 689.90,
        date: new Date(2021, 3, 12)
    },
    {
        id: 'e3',
        title: 'Car Wash',
        amount: 50,
        date: new Date(2021, 2, 9)
    },
    {
        id: 'e4',
        title: 'Printer',
        amount: 499.90,
        date: new Date(2021, 5, 12)
    },
]

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        // we use prevState, so when we pass a function as an argument to the state update function, and that function will automatically the latest state.
        //this technique is essential when we update a state that depend on the previous state
        setExpenses((prevExpenses) => {
            return ([expense, ...prevExpenses]) //...prevExpenses, destruct the previous expenses. that's a standard javascript feature

        });
    };



    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;