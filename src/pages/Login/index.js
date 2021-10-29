import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";

import logo from "../../assets/Logo.png";
import picture from "../../assets/OmniStack11.png";

export default function Login() {
  const { id, setId } = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.get(`/ongs/${id}`);

      localStorage.setItem("#be_the_hero:ongId", id);
      localStorage.setItem("#be_the_hero:ongName", response.data.ongToken.name);
      localStorage.setItem(
        "#be_the_hero:ongToken",
        response.data.ongToken.token
      );

      history.push("/occ");
    } catch (err) {
      alert("Falha ao Logar", err);
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>

          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>

          <button className="button" type="submit">
            Login
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não Sou Cadastrado
          </Link>
        </form>
      </section>

      <img src={picture} alt="heroes"></img>
    </div>
  );
}
