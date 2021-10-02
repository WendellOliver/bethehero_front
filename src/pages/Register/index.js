import React, { useState } from "react";
import api from "../../services/api";


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
        const response = await api.post("/ongs", data);
    }
    return(
    <form onSubmit={ handleRegister }>
        <input placeholder="Nome da ONG" type="text" value={name} onChange={e=>setName(e.target.value)}></input>
        <input placeholder="Email" type="text" value={email} onChange={e=>setEmail(e.target.value)}></input>
        <input placeholder="Whatsapp" type="text" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)}></input>
        <input placeholder="Cidade" type="text" value={city} onChange={e=>setCity(e.target.value)}></input>
        <input placeholder="UF" type="text" value={uf} onChange={e=>setUf(e.target.value)}></input>
        <button type="submit">Cadastrar</button>
    </form>
    )
}