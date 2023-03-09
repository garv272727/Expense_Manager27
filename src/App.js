import React, {useState} from "react";

import ExpenseDisp from "./components/Expenses/ExpenseDisp";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 499,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 30000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 15000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense =>{
    setExpenses(prevExpenses =>{
      return[expense, ...prevExpenses];   
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseDisp items={expenses}/>
      
    </div>
  );
}

export default App;
