import noCard from "../../assets/NoCard.svg";
import "./styles.css";

export function List() {
  return (
    <div className="ListDiv">
      <div className="Resume">
        <p>Resumo Financeiro</p>
      </div>
      <div className="EmptyList">
        <h3>Você não possui nenhum lançamento</h3>
        <div className="NoCard">
        <img src={noCard} alt="" />
        <img src={noCard} alt="" />
        <img src={noCard} alt="" />
        </div>
      </div>
    </div>
  );
}
