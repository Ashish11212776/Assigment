import { ExpenseContext } from "../context/ExpenseContext.jsx"
import { useContext } from "react"

const Balance = () => {
    const {state}=useContext(ExpenseContext)
  return (
   <h2>Total Balance:{state.totalAmount}</h2>
  )
}

export default Balance