import { useContext } from "react"
import { ExpenseContext } from "../context/ExpenseContext"

const ShowAllExpenses = () => {
    const {state,dispatch}=useContext(ExpenseContext);
  return (
     <ul>
      {state.expenses.map(exp => (
        <li key={exp.id}>
          {exp.text} - ${exp.amount}
          <button onClick={() => dispatch({ type: "DELETE_EXPENSE", payload: exp.id })}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ShowAllExpenses