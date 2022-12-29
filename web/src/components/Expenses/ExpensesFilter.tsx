import React from "react"

import "./ExpensesFilter.css"

interface IExpensesFilter {
  selected: string
  onFilterChange: (year: string) => void
}

const ExpensesFilter = ({ selected, onFilterChange }: IExpensesFilter) => {
  const dropDownChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
    onFilterChange(event.target.value)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
