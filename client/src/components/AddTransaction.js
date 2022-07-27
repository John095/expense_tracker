import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    // setText("");
    // setAmount("");
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
