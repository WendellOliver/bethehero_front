import { Link } from "react-router-dom";

import logo from "../../assets/Logo.png";
import desligar from "../../assets/desligar.png";

import "../Occurrences/styles.css";

export default function Occurrences() {
  const name = localStorage.getItem("#be_the_hero:ongName");
  const title = localStorage.getItem("#be_the_hero:tytle");
  const description = localStorage.getItem("#be_the_hero:description");
  const value = localStorage.getItem("#be_the_hero:value");

  return (
    <div className="occ-conteiner">
      <div className="occ-content">
        <header>
          <img className="logo" src={logo} alt="" />
          <h1>Bem vindo, {name}</h1>
          <button className="button" type="submit">
            Cadastrar novo caso
          </button>
          <Link to="/">
            <button className="logoff" type="submit" href="/">
              <img src={desligar} alt="" />
            </button>
          </Link>
        </header>
        <div className="occ-box-wrapper">
          <h1>Casos Cadastrasdos</h1>
          <div className="box">
            <div className="box-content">
              <h2>Caso:</h2>
              <h3>{title}</h3>

              <h2>Descrição:</h2>
              <p>{description}</p>

              <h2>Valor:</h2>
              <h3>{value}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
