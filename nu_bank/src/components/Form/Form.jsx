import { useState } from "react";
import "./styles.css";

export function Form({ addTransactions, categories }) {
  const [formData, setFormData] = useState({
    description: "",
    type: categories[0],
    value: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    addTransactions(formData);
  }

  return (
    <form className="FormContainer" onSubmit={onSubmit}>
      <div className="DivDescription">
        <label className="LabelTitle" htmlFor="description">
          Descrição
        </label>
        <input
          id="description"
          type="text"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Digite aqui sua descrição"
          className="InputForm"
        />
        <label className="LabelExample" htmlFor="description">
          Ex: Compra de roupas
        </label>
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
            min={0}
            placeholder="1"
            className="InputForm ValueEntry"
            value={formData.value}
            onChange={(e) =>
              setFormData({ ...formData, value: parseInt(e.target.value) })
            }
          />
        </div>
        <div className="DivEntry">
          <select
            name=""
            id="typeEntry"
            className="InputForm SelectEntry"
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            defaultValue={formData.value}
          >
            {categories.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button className="button" type="submit">
        Inserir Valor
      </button>
    </form>
  );
}
