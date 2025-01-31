import Balance from "./components/Balance"
import ExpenseProvider from "./context/ExpenseContext"
import ExpenseForm from "./components/ExpenseForm"
import ShowAllExpenses from "./components/ShowAllExpenses"
function App() {

  return (
    <>
     <ExpenseProvider>
      <h1>Expence Tracer</h1>
      <Balance />
      <ExpenseForm />
      <ShowAllExpenses />
     </ExpenseProvider>
    </>
  )
}

export default App
