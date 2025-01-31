import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext.jsx";
const ExpenseForm = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const {dispatch} = useContext(ExpenseContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !amount) return;
    dispatch({
      type: "ADD_EXPENSE",
      payload: { id: Date.now(), text, amount: Number(amount) },
    });
    setText("");
    setAmount("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Expense name"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
