import React, { useState } from "react";
//import api from "../../services/api";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    const data = { name, email, whatsapp, city, uf };
    console.log(data);
    //const response = await api.post("/ongs", data);
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Volte para o Login
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            placeholder="Whatsapp"
            type="text"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          ></input>
          <div className="input-group">
            <input
              placeholder="Cidade"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
            <input
              placeholder="UF"
              type="text"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            ></input>
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
