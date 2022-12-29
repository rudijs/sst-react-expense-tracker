import React, { useState } from "react"

import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

export interface IExpense {
  id: string
  title: string
  amount: number
  date: Date
}

export interface IExpenses {
  items: IExpense[]
}

const Expenses = (props: IExpenses) => {
  const [filteredYear, setFilteredYear] = useState("2022")

  const filteredYearHandler = (year: string) => {
    setFilteredYear(year)
  }

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear)

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChange={filteredYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  )
}

export default Expenses
