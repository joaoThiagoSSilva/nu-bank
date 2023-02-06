import { IoMdTrash } from "react-icons/io";
import "./styles.css";

export function Card({ transaction, removeEntry }) {
  return (
    <>
      <li>
        {transaction.type === "Entrada" ? (
          <div className="GreenBar"></div>
        ) : (
          <div className="GreyBar"></div>
        )}
        <div className="Li">
          <div className="TransactionsInfo">
            <h5>{transaction.description}</h5>
            <p>{transaction.type}</p>
          </div>
          <div className="TransactionsValue">
            <p>R${transaction.value},00</p>
            <button onClick={() => removeEntry(transaction)}>
              <IoMdTrash />
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
