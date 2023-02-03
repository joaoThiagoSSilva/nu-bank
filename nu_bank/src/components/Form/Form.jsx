import "./styles.css";

export function Form() {
    


  return (
    <form className="FormContainer">
      <div className="DivDescription">
        <label className="LabelTitle" htmlFor="description">Descrição</label>
        <input
          id="description"
          type="text"
          placeholder="Digite aqui sua descrição"
          className="InputForm"
        />
        <label className="LabelExample" htmlFor="description">Ex: Compra de roupas</label>
      </div>
      <div className="LabelContainer">
        <label htmlFor="typeValue">Valor</label>
        <label htmlFor="typeEntry">Tipo de Valor</label>
      </div>
      <div className="DashList">
        <div>
          <input
            id="typeValue"
            type="number"
            placeholder="1"
            className="InputForm ValueEntry"
          />
        </div>
        <div className="DivEntry">
          <select name="" id="typeEntry" className="InputForm SelectEntry">
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <button className="button" type="submit">
        Inserir Valor
      </button>
    </form>
  );
}
