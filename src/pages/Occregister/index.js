import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

export default function Occregister() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/occ">
            <FiArrowLeft size={16} color="#E02041" />
            Volte para a Home
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Título do Caso"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>

          <textarea
            placeholder="Descrição"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <input
            placeholder="Valor em Reais"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>

          <div className="button-group">
            <button className="button" type="submit">
              Cadastrar
            </button>
            <button className="button-t2" type="cancel">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
