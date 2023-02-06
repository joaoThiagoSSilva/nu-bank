import "./styles.css";

export function TotalMoney({ listTransactions }) {
  function sum() {
    const totalValue = listTransactions.reduce(
      (previousValue, currentValue) => {
        if (currentValue.type === "Entrada") {
          return currentValue.value + previousValue;
        }
        if (currentValue.type === "Saída") {
          return previousValue - currentValue.value;
        }
      },
      0
    );
    return totalValue;
  }

  return (
    <div className="TotalMoney">
      <h3>Valor Total:</h3>
      <p>R$ {sum()},00</p>
    </div>
  );
}
