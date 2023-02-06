import { useState } from "react";
import asset_landing_page from "./assets/homescreenasset.png";
import logo_nu from "./assets/nubanklogo.png";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { TotalMoney } from "./components/TotalMoney/TotalMoney";
import "./styles.css";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [logado, setLogado] = useState(false);

  const Login = () => {
    setLogado(true);
  };

  const Logout = () => {
    setLogado(false);
  };

  const categories = ["Entrada", "Saída"];

  function transactionsAdd(formatData) {
    setListTransactions([...listTransactions, formatData]);
  }

  const [filter, setFilter] = useState("");

  const newList = listTransactions.filter((entry) =>
    filter === "" ? true : entry.type === filter
  );

  function removeEntry(remove) {
    const newList = listTransactions.filter((entry) => entry !== remove);
    setListTransactions(newList);
  }

  return (
    <>
      {logado ? (
        <div className="App">
          <Header Logout={Logout} />
          <div className="DashBoard">
            <div className="DashBoardMain">
              <Form addTransactions={transactionsAdd} categories={categories} />
              <TotalMoney listTransactions={newList} />
            </div>
            <aside className="AsideList">
              <List
                listTransactions={newList}
                categories={categories}
                removeEntry={removeEntry}
                setFilter={setFilter}
              />
            </aside>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="HomeBox">
            <div className="HomeContainer">
              <img src={logo_nu} alt="Nu Bank Logo" />
              <div className="TextBox">
                <h1>Centralize o controle das suas finanças</h1>
                <p>de forma rápida e segura</p>
                <button className="ButtonInit" onClick={Login}>
                  Iniciar
                </button>
              </div>
            </div>
            <figure>
              <img src={asset_landing_page} alt="Landing Page Asset" />
            </figure>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
