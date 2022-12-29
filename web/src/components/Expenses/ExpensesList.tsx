import ExpenseItem from "./ExpenseItem"
import { IExpense } from "./Expenses"
import "./Expenseslist.css"

interface ExpensesListProps {
  items: IExpense[]
}

const ExpensesList: React.FC<ExpensesListProps> = ({ items }) => {
  if (!items.length) return <h2 className="expenses-list__fallback">Found no expenses.</h2>

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </ul>
  )
}

export default ExpensesList
