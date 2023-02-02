import noCard from "../../assets/NoCard.svg";
import "./styles.css";

export function List() {
  return (
    <div>
      <div className="Resume">
        <p>Resumo Financeiro</p>
      </div>
      <div className="EmptyList">
        <h3>Você não possui nenhum lançamento</h3>
        <img src={noCard} alt="" />
      </div>
    </div>
  );
}
