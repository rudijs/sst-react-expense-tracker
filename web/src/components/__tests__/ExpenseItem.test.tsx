import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import React from "react"
import ReactDom from "react-dom"
import ExpenseItem from "../Expenses/ExpenseItem"

test("ExpenseItem", () => {
  const expenses = [
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 45,
      date: new Date(2021, 5, 12),
    },
  ]

  const tbody = document.createElement("tbody")

  const { debug } = render(<ExpenseItem {...expenses[0]} />, { container: document.body.appendChild(tbody) })

  debug()

  screen.getByText(/new desk/i)
})
