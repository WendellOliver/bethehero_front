import React, { useState } from "react";
//import api from "../../services/api";
import logo from "../../assets/Logo.png";
import voltar from "../../assets/Return.png";
import { Link } from "react-router-dom";


export default function Register(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUf] = useState('');
    
    async function handleRegister(e){
        e.preventDefault();
        const data={name,email,whatsapp,city,uf};
        console.log(data);
        //const response = await api.post("/ongs", data);
    }
    return(
    <form classname="wrapper"  onSubmit={ handleRegister }>
        <div classname="all">
        <img classname="logo" src={logo} alt=""/>
        <div classname="textarea">
            <h1 classname="register">Cadastro</h1>
            <br></br>
            <h2>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</h2>
            <br></br>
            <div classname="returntext">
                <img src={voltar} alt="" />
                <Link to='/'>Voltar para o Logon</Link>
            </div>
        </div>

        </div>
        <input placeholder="Nome da ONG" type="text" value={name} onChange={e=>setName(e.target.value)}></input>
        <input placeholder="Email" type="text" value={email} onChange={e=>setEmail(e.target.value)}></input>
        <input placeholder="Whatsapp" type="text" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)}></input>
        <input placeholder="Cidade" type="text" value={city} onChange={e=>setCity(e.target.value)}></input>
        <input placeholder="UF" type="text" value={uf} onChange={e=>setUf(e.target.value)}></input>
        <button type="submit">Cadastrar</button>
    </form>
    )
}