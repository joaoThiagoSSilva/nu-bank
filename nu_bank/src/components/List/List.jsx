import noCard from "../../assets/NoCard.svg";
import { Card } from "./Card/Card";
import "./styles.css";

export function List({ listTransactions, categories, removeEntry, setFilter }) {
  return (
    <div className="ContainerList">
      <div className="ListDiv">
        <div className="Resume">
          <p>Resumo Financeiro</p>
        </div>
      </div>
      {listTransactions.length === 0 ? (
        <div className="EmptyList">
          <h3>Você não possui nenhum lançamento</h3>
          <div className="NoCard">
            <img src={noCard} alt="" />
            <img src={noCard} alt="" />
            <img src={noCard} alt="" />
          </div>
        </div>
      ) : (
        <ul>
          {listTransactions.map((transaction, index) => (
            <Card transaction={transaction} key={index} removeEntry={removeEntry}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
