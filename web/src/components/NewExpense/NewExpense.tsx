import React, { useState } from "react"

import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

interface INewExpense {
  onAddExpense: (data: any) => void
}

const NewExpense = (props: INewExpense) => {
  const [isEditing, setIsEditing] = useState(false)

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    console.log("102, expenseData :>> ", expenseData)
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  )
}

export default NewExpense
