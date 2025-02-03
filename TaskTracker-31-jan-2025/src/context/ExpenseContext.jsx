
import { useReducer,createContext } from "react";

 export const ExpenseContext=createContext();

const insialStates={
    expenses:[],
    totalAmount:1000,
}
  function reducer(state,action){
    switch(action.type){
        case "ADD_EXPENSE":
        return {
            ...state,
            expenses:[...state.expenses,action.payload],
            totalAmount:state.totalAmount-action.payload.amount
        };
      case "DELETE_EXPENSE":
      { const deletedExpense = state.expenses.find(exp => exp.id === action.payload);
      return {
        ...state,
        expenses: state.expenses.filter(exp => exp.id !== action.payload),
        totalBalance: state.totalBalance + deletedExpense.amount,
      }; }
      default:
        return state;
    }
  }
const ExpenseProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,insialStates);
  return (
    <ExpenseContext.Provider value={{state,dispatch}}>
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseProvider;