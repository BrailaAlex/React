import React from "react";
import Transaction from "./Transaction"

const TransactionsList = ({ moves }) => {
  console.log(moves);
  return (
  <ul className="transactions">
    {moves.map(transaction =>
      <li key={transaction.id} className="transaction">
      <Transaction {...transaction} />
    </li>)}
    </ul>
  )
}

export default TransactionsList;