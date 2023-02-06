import logo_nu from "./../../assets/nubanklogo.png";
import "./styles.css";

export function Header({ Logout }) {
  return (
    <header>
      <div className="navBar">
        <figure className="logoBox">
          <img className="logoDash" src={logo_nu} alt="" />
        </figure>
        <button onClick={Logout}>Início</button>
      </div>
    </header>
  );
}