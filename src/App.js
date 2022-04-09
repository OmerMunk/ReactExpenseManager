import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14)
        },
        {
            id: 'e1',
            title: 'New TV',
            amount: 799.49,
            date: new Date(2021, 3, 12)
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 9)
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12)
        },
    ]

    const addExpenseHandler = (expense) => {
        console.log("in app js");
        console.log(expense);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;