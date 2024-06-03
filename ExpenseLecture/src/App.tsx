// Expense Tracker

import { useState } from "react"
import ExpenseList from "./expense-tracker/components/ExpenseList"
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter"
import ExpenseForm from "./expense-tracker/components/ExpenseForm";


// for our form we will want an input and for the category we want a dropdown menu  we also want it dynamic so lets use an array for now
// export const categories = ['Groceries', 'Utilities', 'Entertainment', 'Food', 'Shopping'];
// now its moved to a file

const App = () => {

  // after making the dummyExpenseArray we need to have someplace to hold the actual selected categories
  const [selectedCategory, setSelectedCategory] = useState('')

  const [dummyExpensesArray, setDummyExpensesArray] = useState([
    {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
    {id: 2, description: 'bbb', amount: 15, category: 'Entertainment'},
    {id: 3, description: 'ccc', amount: 20, category: 'Food'},
    {id: 4, description: 'ddd', amount: 25, category: 'Shopping'},
    {id: 5, description: 'eee', amount: 30, category: 'Groceries'}
  ])
  
  // lets make a variable with a ternary operator   we will then use our selectedCategory as a boolean like filter through our dummyExpenseArray
  const visibleExpense = selectedCategory ? dummyExpensesArray.filter(e=>e.category === selectedCategory) : dummyExpensesArray;
  
  // delete function
  const handleDelete = (id:number) => {
    // remember that filter will return everything else that is not the id that we pass through
    setDummyExpensesArray(dummyExpensesArray.filter(expense => expense.id !== id ))
  }


  return (
    <>
        <h1 className="text-center">Expense Tracker</h1>

        <div className="m-5">
          <ExpenseForm/>
        </div>

        <div className="m-5">
        {/* <ExpenseFilter onSelectCategory={category => console.log(category)}/> */}
        <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
        </div>

        <div className="m-5">

        {/* <ExpenseList expenses={dummyExpensesArray} onDelete={(id) => console.log('Delete', id)}/> */}
        <ExpenseList expenses={visibleExpense} onDelete={handleDelete}/>
        </div>
    </>
  )
}

export default App